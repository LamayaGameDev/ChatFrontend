# Jocular Julius - Frontend

## Introduction

Jocular Julius is an engaging Latin teacher voice chatbot designed to make learning Latin fun and interactive. It is built on a versatile framework and can be easily adapted for various other use cases.

### Architecture
- **Frontend**: Crafted with TypeScript and Tailwind CSS.
- **Backend**: Engineered using Python and FastAPI.

### Runtime Flow
1. The user enters a voice prompt in the frontend UI.
2. Frontend sends the voice file blob to the backend.
3. The backend utilizes OpenAI Whisper API for speech-to-text conversion.
4. OpenAI GPT-4 API processes text.
5. GPT-4 response is converted to speech using Eleven Labs API.
6. The resulting speech blob is played back in the frontend UI.

### Key Features
- **Realistic Voices**: Lifelike voice responses for enhanced user interaction.
- **Customizability**: Easily adaptable to meet diverse use cases.

### Limitations
- Response times may range between 5-10 seconds due to multiple backend API calls. Expect longer response times during peak traffic hours. But the wait is worth it, and the response will be entertaining. 
- Autoplay of responses may not function on some mobile browsers.

### Project Notes
- Project started in March 2023, preceding OpenAI's voice capability addition to its iPhone app in November 2023.

## Repository Overview

This repository, part of the Chatbot Framework, focuses on the frontend:

1. **Frontend (This Repository)**: [ChatFrontend](https://github.com/LamayaGameDev/ChatFrontend)
2. **Backend**: [ChatBackend](https://github.com/LamayaGameDev/ChatBackend)

We recommend that you manage these repositories separately for efficient development and maintenance.

## Getting Started


### Clone the Repository
To set up the frontend:
```shell
git clone https://github.com/LamayaGameDev/ChatFrontend.git chatbot-frontend
cd chatbot-frontend
```

### ENV
Set the following ENV variables
- NEXT_PUBLIC_BASE_URL=<Backend_URL> : This lets the frontend know which backend URL to call. 


## Deployment

### Railway.app Deployment

This framework is configured for easy deployment on [Railway.app](https://railway.app/). Follow these steps for deployment:

1. **Create a Railway Account**: Sign up or log in to your Railway account.
2. **New Project**: Create a new project and connect it to this GitHub repository.
3. **Environment Setup**: Ensure all necessary environment variables are set up in Railway's dashboard. See ENV details above. 
4. **Deploy**: Use the provided `Procfile` for seamless deployment.


## Acknowledgments

This project is based on the work done in the [chatbot-conversation-jarvis](https://github.com/coderaidershaun/chatbot-conversation-jarvis) repository by [coderaidershaun](https://github.com/coderaidershaun). We are thankful to them for their original contributions and ideas.

