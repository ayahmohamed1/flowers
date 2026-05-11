// WelcomePage.jsx — "Hello My Love!" with YES PLEASE / NO THANKS
import { motion } from 'framer-motion'
import styles from './WelcomePage.module.css'

export default function WelcomePage({ go, content, name }) {
  const w = content.welcome

  return (
    <div className={styles.page}>
      {/* Floating hearts background */}
      <div className={styles.hearts} aria-hidden>
        {['💕','✨','🌸','💖','⭐','🌷','💗','✨'].map((h, i) => (
          <span key={i} className={styles.heart} style={{
            left: `${10 + i * 11}%`,
            animationDelay: `${i * 0.4}s`,
            fontSize: `${0.8 + (i % 3) * 0.3}rem`
          }}>{h}</span>
        ))}
      </div>

      <motion.div
        className={styles.card}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        {/* Cat illustration */}
        <motion.div
          className={styles.catWrap}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CatSVG />
        </motion.div>

        {/* Text */}
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <span className={styles.hello}>{w.greeting}</span>
          <span className={styles.nameText}>{name}</span>
        </motion.div>

        <motion.p
          className={styles.question}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          {w.question}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className={styles.btnYes} onClick={() => go('menu')}>
            {w.yesButton}
          </button>
          <button className={styles.btnNo} onClick={() => go('noThanks')}>
            {w.noButton}
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Inline cat SVG — matches the video's ghost/cat illustration
function CatSVG() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="38" rx="18" ry="20" fill="#f8f8f8" stroke="#333" strokeWidth="1.5"/>
      <polygon points="14,22 10,8 20,18" fill="#f8f8f8" stroke="#333" strokeWidth="1.5"/>
      <polygon points="46,22 50,8 40,18" fill="#f8f8f8" stroke="#333" strokeWidth="1.5"/>
      <circle cx="23" cy="35" r="3" fill="#333"/>
      <circle cx="37" cy="35" r="3" fill="#333"/>
      <path d="M26 42 Q30 46 34 42" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <line x1="15" y1="36" x2="6" y2="34" stroke="#999" strokeWidth="1"/>
      <line x1="15" y1="38" x2="6" y2="38" stroke="#999" strokeWidth="1"/>
      <line x1="45" y1="36" x2="54" y2="34" stroke="#999" strokeWidth="1"/>
      <line x1="45" y1="38" x2="54" y2="38" stroke="#999" strokeWidth="1"/>
      <circle cx="24" cy="34" r="1" fill="white"/>
      <circle cx="38" cy="34" r="1" fill="white"/>
    </svg>
  )
}
