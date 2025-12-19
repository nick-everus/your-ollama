🧠 Local Multimodal LLM Demo (Ollama + LLaVA)

A minimal end-to-end multimodal AI demo that lets users upload an image and send a text prompt to a local LLM for vision + language reasoning.

This project runs entirely on your machine using Ollama and the LLaVA vision model — no cloud APIs, no keys, no cost.

⸻

✨ Features
	•	🖼️ Image upload (PNG / JPG / etc.)
	•	💬 Text prompt input
	•	🧠 Multimodal inference (image + text)
	•	⚡ Local LLM via Ollama
	•	🌐 Simple web UI
	•	🔌 Node.js + Express backend
	•	🔒 No external services required

    
📦 Install Ollama
https://ollama.com/download
ollama pull llava

npm install ( if not already installed )

▶️ Run the App
Start the server:
PORT=3001 node server.js
Open in your browser:
http://localhost:3001