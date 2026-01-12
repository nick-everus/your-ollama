# 🦙 Your-Ollama

**Your-Ollama** is a lightweight, fully local chatbot backend powered by **Ollama** and Python.  
It lets you run large language models **entirely on your own machine** and exposes a simple HTTP API (and optional web UI) for chatting with them.

No cloud APIs. No keys. Your data never leaves your Mac.

---

## ✨ Features

- 🧠 Local LLM inference via **Ollama**
- ⚡ FastAPI backend
- 💬 Simple `/chat` HTTP endpoint
- 🔌 Easily swap models (`llama3`, `mistral`, etc.)
- 🧪 Ideal for experimentation, demos, and local AI workflows

---

## 🧱 Architecture

Client (Browser / curl / script)
↓
FastAPI (Python)
↓
Ollama local server
↓
LLM model (llama3, mistral, etc.)

---

## ✅ Prerequisites
- Python **3.10+**
- **Ollama** installed and running

## Install Ollama
If you don’t already have Ollama installed:
```bash
brew install ollama
```
Start the Ollama server:
```bash
ollama serve
```
Pull a model (example):
```bash
ollama pull llama3
```
### 🚀 Quick Start
```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install fastapi uvicorn requests
python -m pip install --upgrade pip
pip install fastapi uvicorn requests
```
Start the API server
```bash
uvicorn server:app --reload --host 127.0.0.1 --port 8000
```
The API will now be available at:
http://127.0.0.1:8000/chat