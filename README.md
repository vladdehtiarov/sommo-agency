# Sommo Agency Website

A stunning one-page website for Sommo Agency - No-Code, Low-Code & AI Development Studio.

## 🚀 Tech Stack

- **React 19** - UI Framework
- **Vite 7** - Build Tool
- **Framer Motion** - Animations
- **Lenis** - Smooth Scrolling

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Render.com

### Option 1: Blueprint (Recommended)

1. Push this repo to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click **New** → **Blueprint**
4. Connect your GitHub repo
5. Render will auto-detect `render.yaml` and deploy

### Option 2: Manual Setup

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **New** → **Static Site**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `sommo-agency`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment Variable**: `NODE_VERSION` = `22`
5. Click **Create Static Site**

Your site will be live at `https://sommo-agency.onrender.com`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation
│   ├── Hero.jsx         # Hero section with animations
│   ├── Services.jsx     # Services cards
│   ├── Work.jsx         # Case studies
│   ├── About.jsx        # About & Team
│   ├── Contact.jsx      # Contact form
│   ├── Footer.jsx       # Footer
│   └── CustomCursor.jsx # Custom cursor effect
├── hooks/
│   └── useSmoothScroll.js
├── App.jsx
├── App.css
├── index.css            # Global styles & variables
└── main.jsx
```

## 🎨 Design Features

- Dark theme with neon accents
- Custom cursor with hover effects
- Smooth scroll animations
- Parallax effects
- Interactive cards with glow effects
- Responsive design

## 📝 License

© 2024 Sommo Agency. All rights reserved.
