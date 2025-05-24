# 💬 AI-Enhanced React Chat Application

A visually rich, fully responsive chat application built using **React**, **TailwindCSS**, and **Framer Motion**, featuring:

- 💡 AI-based message composer  
- 🎨 Light/Dark Theme Switching  
- 📱 Fully Responsive Mobile Design  
- 📞 Voice and Video Call Modals  
- 😊 Emoji Picker  
- ⚙️ Customization Settings (Themes, Fonts)  
- 🎨 Strategic Gradients and Animations  

---

## ✨ Features

### 🗨️ Chat Interface
- List of chat users with real-time chat switching
- Responsive chat screen (2/3 layout for chats, 1/3 for AI composer)
- Smooth animations and transitions

### 🤖 AI Composer
- Ask questions to AI
- Typing animation while generating AI answers
- One-click to copy/send AI reply
- Subtle gradients and visual flair

### 📱 Responsive Design
- Mobile-first layout adjustments
- Toggle between user list and chat on smaller screens
- Sticky header/footer for mobile usability

### 🎨 Theme & Style
- Light/Dark Mode toggle from settings
- Font style customization
- Theme context with persistent state
- Beautiful use of gradients only in key areas:
  - Composer Header
  - Send Button
  - Video Call Modal Background

### 🎥 Call Modals
- **Voice Call:**
  - Caller avatar with pulsing effect
  - Call duration timer
  - Mute/Unmute, End Call
- **Video Call:**
  - Full-screen layout
  - PiP for local camera
  - Camera/Mic controls
  - Blur and gradient background
  - End call button

### ⚙️ Settings Modal
- Toggle theme (light/dark)
- Select text styles
- Theme preview with animations

---

## 🧱 Tech Stack

- **React** (Hooks + Context API)  
- **TailwindCSS** (Dark mode, responsive utilities)  
- **Framer Motion** (UI animations)  
- **Heroicons / Lucide** (Icons)  
- **OpenAI or Custom AI API** (for generating replies)  
- **React Context** for global theme state  

---

## 📂 Folder Structure

```plaintext
react-ai-chat-app/
├── public/                   # Static assets like icons, avatars, fonts
│   └── index.html
├── src/
│   ├── assets/               # Images, icons, avatars
│   ├── components/           # Reusable UI components
│   │   ├── Chat/             # Chat layout, message bubble, input
│   │   ├── Composer/         # AI composer and related UI
│   │   ├── CallModals/       # Voice & video call modal components
│   │   ├── Settings/         # Settings modal & theme preview
│   │   └── Shared/           # Buttons, headers, emoji popup, etc.
│   ├── context/              # ThemeContext and global state
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Main screens like Home, ChatView
│   ├── styles/               # Tailwind config, global styles
│   ├── utils/                # Helper functions, constants, API handlers
│   ├── App.tsx               # Main app component
│   └── main.tsx              # React DOM entry point
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```
---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/react-ai-chat-app.git

   cd react-ai-chat-app

   Install dependencies

   npm install

   Start the development server

   npm run dev

---

## 🖼️ Screenshots

<img width="500" alt="Screenshot 2025-05-24 at 12 00 51" src="https://github.com/user-attachments/assets/2b345276-563a-4c7f-9701-2c5677c90ecb" />
<img width="500" alt="Screenshot 2025-05-24 at 12 01 01" src="https://github.com/user-attachments/assets/3eef1be1-890e-4d52-9065-b47e198545e7" />
<img width="500" alt="Screenshot 2025-05-24 at 12 01 08" src="https://github.com/user-attachments/assets/3e7414ea-e953-42ca-b150-12fe0ae94631" />
<img width="500" alt="Screenshot 2025-05-24 at 12 01 15" src="https://github.com/user-attachments/assets/0bb7d5eb-4dd9-4d1e-bd0a-bd5fcf29d5ff" />

<img width="500" alt="Screenshot 2025-05-24 at 12 01 21" src="https://github.com/user-attachments/assets/3f19289a-6044-42be-86cf-89dc16ff9b4a" />
<img width="500" alt="Screenshot 2025-05-24 at 12 01 25" src="https://github.com/user-attachments/assets/7734a5f9-6644-44b6-967b-95e07910e0b9" />
<img width="500" alt="Screenshot 2025-05-24 at 12 01 33" src="https://github.com/user-attachments/assets/e69b3acc-c9b0-4ab4-a9e9-9518df3d1fb5" />
<img width="500" alt="Screenshot 2025-05-24 at 12 01 55" src="https://github.com/user-attachments/assets/88abf45e-2e64-42d3-a430-2d201b29a616" />

---

## 📘 Available Scripts
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build

---

## ⚒️ Customization
Change primary gradients and themes in tailwind.config.js

---

## 🤝 Contribution
Feel free to fork the project, open issues, or submit pull requests for improvements or features!

---
## 🪪 License
MIT License

Made with ❤️ and a lot of gradients by Arti Chaudhary

