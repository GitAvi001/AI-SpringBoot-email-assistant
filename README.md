# AI-SpringBoot-email-assistant 🚀📧

An intelligent Chrome browser extension for Gmail that automatically generates context-aware email replies using AI. Designed to streamline communication, this tool enhances productivity by delivering real-time, personalized email responses with minimal user input.

## ✨ Features

- 🔗 Seamless integration with Gmail UI
- 🤖 AI-generated, context-aware reply suggestions
- ⚡ Real-time response generation
- 🔒 Ensures user privacy by processing context securely
- 🧠 Improves communication efficiency and response speed

## ⚙️ How to start

1. The extension integrates directly into Gmail when activated in Chrome.
2. Upon opening an email, it fetches the context of the conversation.
3. AI processes the content and generates a smart, personalized reply.
4. User can edit, approve, or discard the suggested reply.

### 1. Clone the Repository
```bash
git clone https://github.com/GitAvi001/AI-SpringBoot-email-assistant.git
```

### 2. Start SpringBoot backend
```bash
cd email-writer
./mvnw spring-boot:run(or just click the SprinbootApplication main file and select run in intellijidea)
```

### 3. Setup frontend
```bash
cd email-writer-react
npm install
npm run build
```
### 4. Load the email extension
1. Go to chrome://extensions/
2. Enable Developer Mode
3. Click Load unpacked
4. Select the email-writer-ext directory

🛠️ Tech Stack
- Frontend: React.js, Vue.js, TypeScript, Material UI, Chrome Extension APIs
- Backend: Spring Boot
- AI Engine: Google Gemini AI
- Build Tools: Maven, npm

## 📚 Documentation References

Here are some of the key resources referred to during the development of this project:

- [Google Gemini API Documentation](https://ai.google.dev/gemini-api/docs) – For understanding and integrating AI-powered response generation.
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world) – For building and deploying the Chrome extension within the Gmail interface.

