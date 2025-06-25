console.log("Content script loaded");

function injectButton(){

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
