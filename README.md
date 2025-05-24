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

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/react-ai-chat-app.git

   cd react-ai-chat-app

   Install dependencies

   npm install

   Start the development server

   npm run dev
🖼️ Screenshots
You can add your screenshots in the screenshots/ folder and reference them here:

💬 Chat + AI Composer

🌙 Dark Theme

📞 Call Modal

🎥 Video Call Modal

⚙️ Settings

🧠 AI Integration
AI responses generated in real-time

Typing animation simulates real interaction

One-click to add the response to chat

Fully customizable AI composer area

📱 Responsiveness
Breakpoints optimized for mobile/tablet/desktop

Hide/show views smartly on smaller screens

Smooth transitions and adaptive sizing

📘 Available Scripts
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build

⚒️ Customization
Change primary gradients and themes in tailwind.config.js

Add more fonts and style options in SettingsModal.tsx

Extend ThemeContext.tsx for more global states

🤝 Contribution
Feel free to fork the project, open issues, or submit pull requests for improvements or features!

🪪 License
MIT License

Made with ❤️ and a lot of gradients by Arti Chaudhary

