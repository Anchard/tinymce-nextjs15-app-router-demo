# TinyMCE + Next.js 15 (App Router) Integration

This project is a **minimal, modern, and elegant demonstration** of how to integrate the **TinyMCE rich text editor** with **Next.js 15**, leveraging the new **App Router** architecture and **TypeScript**.

> 🔍 The official TinyMCE documentation currently lacks up-to-date examples for Next.js App Router and TypeScript. This repository bridges that gap with a clean, functional, and developer-friendly example.

📚 **Official Documentation**: [TinyMCE Documentation](https://www.tiny.cloud/docs/tinymce/latest/)

---

## 🚀 Features

- ✅ Dynamically imports TinyMCE in an SSR-safe manner
- ✅ Built with Next.js 15 using the new `app/` directory structure
- ✅ Displays HTML preview of the editor content in the browser console
- ✅ Fully supports TypeScript for type safety
- ✅ Minimal and clean setup, perfect for learning or extending

---

## 🛠️ Tech Stack

- **Next.js 15 (App Router)** – Modern routing and file-based architecture
- **TypeScript** – Strongly typed code for better developer experience
- **TinyMCE Editor** – Feature-rich WYSIWYG editor
- **Tailwind CSS** – Lightweight styling framework (optional)

---

## 🔑 Getting Your TinyMCE API Key

To use TinyMCE, you need an API key. It’s free for basic usage.

1. Visit [https://www.tiny.cloud](https://www.tiny.cloud)
2. Click **"Get Started for Free"**
3. Sign up and retrieve your API key
4. Replace `"your-api-key-here"` in the code with your actual API key:

   ```html
   <EditorNoSSR apiKey="your-api-key-here" />

---
## 📦 Installation

Clone the repository and install dependencies:

git clone https://github.com/your-username/tinymce-nextjs15-app-router-demo.git 
cd tinymce-nextjs15-app-router-demo 
npm install
npm run dev

---

## 📁 Project Structure

app/ 
└── page.tsx ← Main page with TinyMCE integration

---

## 👤 Author

Developed with ❤️ by **Lucas Fernandes**

If you found this project helpful, please consider giving it a ⭐ and sharing it with your peers.

- GitHub: [@Anchard](https://github.com/Anchard)  
- LinkedIn: [@Lucas Fernandes](https://www.linkedin.com/in/lucas-fernandes-886529193/)