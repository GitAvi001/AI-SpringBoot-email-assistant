console.log("Content script loaded");

function createAIButton() {
    const button = document.createElement('div');
    // Set up button properties and styles 
    button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3';
    button.style.marginRight = '8px';
    button.innerHTML = 'AI Reply';
    button.setAttribute('role','button');
    button.setAttribute('data-tooltip','Generate AI Reply');
    return button;
}

function getEmailContent() {
    const selectors = [
        '.h7',
        '.a3s.aiL',
        '.gmail_quote',
        '[role="presentation"]'
    ];
    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if (content) {
            return content.innerText.trim();
        }
        return '';
    }
}

function findComposeTollBar(){

    const selectors=[
        '.btC',
        'aDh',
        '[role="toolbar"]',
        '.gU.Up'
    ];

    for(const selector of selectors){
        const toolbar = document.querySelector(selector);
        if(toolbar){
            return tooblbar;
        }
        return null;
    }
}

function injectButton(){
    const existingButton = document.querySelector('.ai-reply-button');
    if(existingButton) existingButton.remove(); //Removing the existing button if it exists anymore
    //getEmailCOntent() will invoke and return the email content from the compose window

    const toolbar = findComposeToolbar();

    if(!toolbar){
        console.log("Toolbar not found")
        return;
    }

    console.log("Toolbar found!, creating the AI button")

    const button = createAIButton();

    button.classList.add('AI-reply-button');

    button.addEventListener('click', async ()=>{ //addEventListener will listen for the click button change
    
        try{
            button.innerHTML="Generating..."; //Change the button text to Generating...
            button.disabled=true //Avoid multiple button clicks
            
            const emailContent = getEmailContent(); //Get the email content from the compose window

            const response = await fetch('http://localhost:8080/api/email/generate',{
                method:'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    emailContent:   emailContent,
                    tone: "professional" //Send the email content to the backend server
                })
            });

            if(!response.ok){
                throw new Error('API request failed to generate AI reply');
            }

            const generatedReply = await response.text();

            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');


            if(composeBox){
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply); //Insert the generated reply into the compose box
            }else{
                console.error("Compose box not found");
            }

        }catch(error){
            console.error(error);
            console.log('Failed to generate reply')
        }finally{
            button.innerHTML = 'AI Reply'
            button.disabled = false;
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);

}

const observer = new MutationObserver((mutations) => { //Mutation observer will look and detect changes in DOM tree
    for(const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes); //Changes in the browser page will detect from changes such as button changes or other changes
        const hasComposeElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE && 
            (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );

        if (hasComposeElements) {
            console.log("Compose Window Detected");
            setTimeout(injectButton, 500);
        }
    }
});

observer.observe(document.body, {
    childList: true, //Observe direct children of the body
    subtree: true
})
