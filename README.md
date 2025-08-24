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
DATABASE_URL=postgresql://neondb_owner:password@ep-mute-meadow-aderis1u-pooler.c-2.us-east-1.aws.neon.tech:5432/Own_projects?sslmode=require

DB_USER=neondb_owner
DB_PASSWORD=npg_6UNzhFZ3RaEi
DB_HOST=ep-mute-meadow-aderis1u-pooler.c-2.us-east-1.aws.neon.tech
DB_PORT=5432
DB_NAME=Own_projects

# Security & Rate Limiting
ARCJET_KEY=ajkey_01k3et2mh7fk08g5d2573tpbr3

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/app
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/app
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aGVhbHRoeS11cmNoaW4tNzcuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_PTSQ4I9cd6z1BpmzT5OzcPWFQCFjoVocyyzM6lKWvY

# AI Services
HUME_API_KEY=o0IAtCg30xkfYB9ZGoTObvf78RF1LwEYM95NGqGAPAmA3qdI
HUME_SECRET_KEY=ryrNALXtgHOBhUWHzG1n854iMYVLH5F33d4ht5KORNGAAGVNNrt0bGbNAiWgASLs
NEXT_PUBLIC_HUME_CONFIG_ID=d4b92823-ee66-4c79-80e0-da3e107af9e9
GEMINI_API_KEY=AIzaSyBOTXMK8NRiaomPpuBuwPXaxpPMy1CcPMk



# Clone the repo
git clone https://github.com/your-username/ai-interview-prep.git

# Install dependencies
npm install

# Setup database (if needed)
npm run db:setup

# Start development server
npm run dev


The app will be available at 👉 http://localhost:3000


📸 Screenshots
<p align="center"> <img src="/public/app.png" alt="Dashboard Screenshot" width="800"/> </p>
🤝 Contributing

Contributions, bug reports, and feature requests are welcome!
Open a PR or an Issue anytime. 🚀