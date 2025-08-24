<h1 align="center">🎯 AI-Powered Interview Preparation Platform</h1>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs" /></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Postgres-Neon-green?logo=postgresql" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Clerk-Auth-purple?logo=clerk" /></a>
  <a href="#"><img src="https://img.shields.io/badge/AI-Gemini-orange?logo=googlegemini" /></a>
  <a href="#"><img src="https://img.shields.io/badge/License-MIT-yellow" /></a>
</p>

---

## 🚀 About the Project

**AI Interview Prep** is your **personal AI mentor, guide, and teacher** for cracking interviews.  
It simulates **real interview environments**, gives **feedback**, and acts like a **trainer** to improve your confidence.  

Think of it as your **AI-powered career coach**. 💼✨  

---

## 🌟 Features

- 🤖 **AI Mentor Mode**: Get personalized interview questions & answers powered by **Google Gemini**  
- 🎤 **Mock Interview Simulator** with AI feedback  
- 🎧 **Voice & Emotion Analysis** using **Hume AI**  
- 📝 **Question Bank** tailored for your domain (Tech, HR, Behavioral, etc.)  
- 📊 **Progress Tracking**: See improvement over time  
- 🔐 **Secure Authentication** with **Clerk**  
- ⚡ **Scalable Database** hosted on **Neon PostgreSQL**  
- 🛡️ **Rate Limiting & Security** via **Arcjet**  
- 🎯 Built with **Next.js 15 + TypeScript + Tailwind CSS** for a modern developer experience  

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS  
- **Backend**: Node.js (API Routes)  
- **Database**: Neon (PostgreSQL)  
- **Authentication**: Clerk  
- **Security**: Arcjet  
- **AI Services**: Google Gemini + Hume AI  

---

## ⚙️ Environment Setup

Create a `.env.local` file in your project root:

```env
# Database Configuration (Neon)
DATABASE_URL=postgresql://<YOUR_DB_USER>:<YOUR_DB_PASSWORD>@<YOUR_DB_HOST>:<YOUR_DB_PORT>/<YOUR_DB_NAME>?sslmode=require

# Security & Rate Limiting
ARCJET_KEY=<YOUR_ARCJET_KEY>

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/app
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/app
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<YOUR_CLERK_SECRET_KEY>

# AI Services
HUME_API_KEY=<YOUR_HUME_KEY>
HUME_SECRET_KEY=<YOUR_HUME_SECRET_KEY>
NEXT_PUBLIC_HUME_CONFIG_ID=<YOUR_HUME_CONFIG_ID>
GEMINI_API_KEY=<YOUR_GEMINI_KEY

# Clone the repo
git clone https://github.com/your-username/ai-interview-prep.git

# Install dependencies
npm install

# Setup database (if needed)
npm run db:setup

# Start development server
npm run dev
  The app will be available at 👉 http://localhost:3000



---


## 📸 Screenshots

<p align="center">
  <img src="/public/app.png" alt="App Screenshot" width="800"/>
</p>


---

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!
Open a PR or an Issue anytime. 🚀
