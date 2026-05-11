import { motion } from 'framer-motion'
import styles from './SongPage.module.css'

export default function SongPage({ back, content }) {
  const s = content.song

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.remindsText}>{s.title}</p>

          <div className={styles.embedWrap}>
            {/* Vinyl record spinning decoration */}
            <motion.div
              className={styles.vinyl}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <VinylSVG />
            </motion.div>

            <iframe
              className={styles.iframe}
              src={`https://www.youtube.com/embed/${s.youtubeId}?rel=0&modestbranding=1`}
              title={`${s.songTitle} - ${s.artist}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className={styles.songInfo}>
            <span className={styles.songTitle}>{s.songTitle}</span>
            <span className={styles.artist}>{s.artist}</span>
          </div>

          <div className={styles.highlight}>{s.highlightText}</div>

          <motion.div
            className={styles.secretBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {s.secretMessage}
          </motion.div>
        </motion.div>

        <div className={styles.dashedBottom} />

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="btn-return" onClick={back}>{s.returnButton}</button>
        </motion.div>
      </div>
    </div>
  )
}

function VinylSVG() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="24" fill="#1a1a2e"/>
      {[22,19,16,13].map(r => (
        <circle key={r} cx="25" cy="25" r={r} fill="none" stroke="#333" strokeWidth="1"/>
      ))}
      <circle cx="25" cy="25" r="5" fill="#8B1A1A"/>
      <circle cx="25" cy="25" r="2" fill="#c0392b"/>
      {/* shimmer */}
      <path d="M 10 15 Q 15 10 25 8" stroke="#ffffff18" strokeWidth="2" fill="none"/>
    </svg>
  )
}
