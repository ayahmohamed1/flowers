// App.jsx — controls which page is shown
// Pages: welcome → (no) noThanks | (yes) menu → memories/flowers/locks/song/letter

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { content } from './content.js'

import WelcomePage   from './pages/WelcomePage.jsx'
import NoThanksPage  from './pages/NoThanksPage.jsx'
import MenuPage      from './pages/MenuPage.jsx'
import MemoriesPage  from './pages/MemoriesPage.jsx'
import FlowersPage   from './pages/FlowersPage.jsx'
import SongPage      from './pages/SongPage.jsx'
import LetterPage    from './pages/LetterPage.jsx'
import LocksPage     from './pages/LocksPage.jsx'
import MusicToggle   from './components/MusicToggle.jsx'

// Page transition
const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function App() {
  // history stack — we push pages onto it
  const [history, setHistory] = useState(['welcome'])
  const current = history[history.length - 1]

  const audioRef = useRef(null)
  const [musicOn, setMusicOn] = useState(false)

  // URL param override for name
  const params = new URLSearchParams(window.location.search)
  const name = params.get('name') || content.welcome.name

  const go = (page) => setHistory(h => [...h, page])
  const back = () => setHistory(h => h.length > 1 ? h.slice(0, -1) : h)

  useEffect(() => {
    if (!audioRef.current) return
    musicOn ? audioRef.current.play().catch(() => {}) : audioRef.current.pause()
  }, [musicOn])

  const pageProps = { go, back, content, name }

  const renderPage = () => {
    switch (current) {
      case 'welcome':   return <WelcomePage  {...pageProps} key="welcome"  />
      case 'noThanks':  return <NoThanksPage {...pageProps} key="nothanks" />
      case 'menu':      return <MenuPage     {...pageProps} key="menu"     />
      case 'memories':  return <MemoriesPage {...pageProps} key="memories" />
      case 'flowers':   return <FlowersPage  {...pageProps} key="flowers"  />
      case 'song':      return <SongPage     {...pageProps} key="song"     />
      case 'letter':    return <LetterPage   {...pageProps} key="letter"   />
      case 'locks':     return <LocksPage    {...pageProps} key="locks"    />
      default:          return <WelcomePage  {...pageProps} key="welcome"  />
    }
  }

  return (
    <>
      {content.music && (
        <audio ref={audioRef} src={content.music} loop />
      )}
      {content.music && (
        <MusicToggle on={musicOn} onToggle={() => setMusicOn(v => !v)} />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ width: '100%', minHeight: '100vh' }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
