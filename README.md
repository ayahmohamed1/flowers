# 💌 Love Gift — Interactive Romantic Website

A multi-page romantic interactive website inspired by @fayy.creates on TikTok.  
Built with **React + Vite + Framer Motion**.

---

## ✨ Pages Included

| Page | Description |
|------|-------------|
| 🏠 Welcome | "Hello My Love!" with YES / NO buttons |
| 😢 No Thanks | Crying cat + "I promise you'll like it" |
| 🎁 Gift Menu | 4 interactive gift boxes to explore |
| 🖼️ Captured Memories | Scrollable polaroid photo strip |
| 🌷 Virtual Flowers | Tulip with floating poem lines |
| 🎵 Love Song | YouTube embed + spinning vinyl |
| 💌 Love Letter | Handwritten-style letter on lined paper |
| 🔒 Love Locks | Animated love locks page |

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## ✏️ Customise Everything — One File Only

**Edit `src/content.js` to change ALL text, images, and settings.**

```js
// Change recipient name
welcome: {
  name: "Aya!",
  ...
}

// Change main letter message
letter: {
  message: `Write your message here...`,
  signature: "The love of your life",
}

// Change YouTube video
song: {
  youtubeId: "VIDEO_ID_HERE",   // from youtube.com/watch?v=VIDEO_ID
  artist: "Artist Name",
}
```

---

## 🖼️ Adding Photos (Memories Page)

1. Place photos in **`public/images/`**
2. Name them `memory1.jpg`, `memory2.jpg`, ... `memory6.jpg`  
   OR update the paths in `src/content.js`:

```js
memories: {
  images: [
    { src: "/images/your-photo.jpg", label: "caption 🌸", tag: "label" },
    ...
  ]
}
```

Missing images show a 📷 placeholder automatically.

---

## 🎵 Background Music (Optional)

1. Place an `.mp3` in **`public/music/`**
2. Set in `src/content.js`:

```js
music: "/music/your-song.mp3",
```

Set to `null` to disable (music toggle button hidden).

---

## 🔗 URL Parameters

Override the recipient name dynamically:

```
https://your-site.com/?name=Aya
```

---

## 🌐 Deploy to Vercel

```bash
npm run build
# Connect your GitHub repo to vercel.com — zero config needed
```

## 🌐 Deploy to Netlify

```bash
npm run build
# Drag and drop the dist/ folder to netlify.com/drop
# OR connect your Git repo
```

---

## 💼 Reuse for Multiple Clients

For each client:
1. Duplicate the project folder
2. Edit only `src/content.js`
3. Add their photos to `public/images/`
4. Deploy to Vercel/Netlify (free tier works great)
5. Share the URL 💌

---

## 📁 Project Structure

```
love-gift/
├── public/
│   └── images/          ← Put photos here
│   └── music/           ← Optional: background music
├── src/
│   ├── content.js       ← ★ EDIT THIS ONLY ★
│   ├── App.jsx          ← Page router/state
│   ├── pages/
│   │   ├── WelcomePage.jsx
│   │   ├── NoThanksPage.jsx
│   │   ├── MenuPage.jsx
│   │   ├── MemoriesPage.jsx
│   │   ├── FlowersPage.jsx
│   │   ├── SongPage.jsx
│   │   ├── LetterPage.jsx
│   │   └── LocksPage.jsx
│   └── components/
│       └── MusicToggle.jsx
└── vite.config.js
```
