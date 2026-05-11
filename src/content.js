// ================================================================
//  💌  LOVE GIFT — CONTENT CONFIGURATION
//  Edit ONLY this file to fully customize your romantic website.
//  URL overrides: ?name=Aya&msg=Hello
// ================================================================

export const content = {

  // ── Page 1: Welcome ──────────────────────────────────────────
  welcome: {
    greeting: "Hello",
    name: "My Love!",           // recipient name
    question: "do you want to see your gift?",
    yesButton: "YES PLEASE",
    noButton: "NO THANKS",
    noCatEmoji: "🐱",           // cat emoji shown on welcome
  },

  // ── Page 2: No Thanks reaction ───────────────────────────────
  noThanks: {
    catEmoji: "😢",
    message: "I promise you'll like it",
    tryAgainButton: "TRY AGAIN",
  },

  // ── Page 3: Gift Menu ─────────────────────────────────────────
  menu: {
    title: "THESE ARE FOR YOU!",
    subtitle: "I hope you like it, I love you!",
    items: [
      { id: "memories",  icon: "🖼️",  label: "Captured Memories" },
      { id: "flowers",   icon: "💐",  label: "Virtual Flowers" },
      { id: "locks",     icon: "🔒",  label: "Love Locks" },
      { id: "letter",    icon: "💌",  label: "Love Letter" },
    ],
  },

  // ── Page 4: Captured Memories ────────────────────────────────
  memories: {
    title: "Captured Memories",
    // Place images in /public/images/ and reference here
    images: [
      { src: "/images/pic1.jpg", label: " 🌸", tag: "happy" },
      { src: "/images/pic2.jpg", label: " 🌷",      tag: "birthday!" },
      { src: "/images/pic3.jpg", label: "💕",   tag: "to" },
      { src: "/images/pic4.jpg", label: " 🎂",   tag: "my" },
      { src: "/images/pic5.jpg", label: " 💕",         tag: "babe" },
      { src: "/images/pic6.jpg", label: " 🌷",    tag: "💌 " },
    ],
    returnButton: "RETURN",
  },

  // ── Page 5: Virtual Flowers ──────────────────────────────────
  flowers: {
    title: "Virtual Flowers",
    flowerName: "PINK LILIES",
    flowerSubtitle: "your favorite flower",
    flowerEmoji: "🌸",
    // Poem lines that float around the flower
    poems: [
      "You keep me smiling, like a garden of flowers",
      "You make the day feel like a bouquet of blooms",
      "Your smile spreads like spring flowers in the field",
      "You're as lovely as a garden full of flowers after the rain",
      "You are the most gorgeous girl in this universe",
      "I fell in love with you every single second",
      "Your kindness blooms like petals in the breeze",
      "Your smile is the only thing I need today",
    ],
    returnButton: "RETURN",
  },

  // ── Page 6: Love Song ─────────────────────────────────────────
  song: {
    title: "this song reminds me of you (>ᴗ<)",
    songTitle: "Nothing",
    artist: "Bruno Major",
    youtubeId: "MFxeHUrOiNI",    // YouTube video ID only
    highlightText: "The most beautiful thing",
    secretMessage: "Secret message: 1:43 - 1:55",
    returnButton: "RETURN",
  },

  // ── Page 7: Love Letter / Message ────────────────────────────
  letter: {
    title: "Message for my love",
    // Supports \n for line breaks
    message: `My Dearest Rahaf
I wanted to take a moment to write down what my heart often finds difficult to put into words. From the very second you walked into my life everything changed.
It is as if the world became more colorful and every mundane thing suddenly felt like a beautiful adventure

I am constantly amazed by your kindness your softness and the way you make everyone around you feel special. 
But more than that I am grateful for the way you look at me as if I am the only person who matters. Your love is my sanctuary it is the place where I feel most at home and most understood.
Please never forget how much you are loved by me. It’s not just 19 years of living but it’s a 19 years of spreading love for everyone u have met. I will keep loving you for the rest of my life.

My sweet girl ur my today my tomorrow and my forever❤️.`,
    signoff: "Sincerely yours,",
    signature: "The love of your life",
    returnButton: "RETURN",
  },

  // ── Love Locks (bonus page) ───────────────────────────────────
  locks: {
    title: "Love Locks",
    message: "Our love is locked forever 🔒",
    names: ["Me", "&", "You"],
    returnButton: "RETURN",
  },

  // ── Global ───────────────────────────────────────────────────
  music: null,  // e.g. "/music/song.mp3" or null to disable
};
