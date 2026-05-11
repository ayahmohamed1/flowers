import { motion } from 'framer-motion'
import styles from './LocksPage.module.css'

export default function LocksPage({ back, content }) {
  const l = content.locks

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        >
          <motion.div
            className={styles.lockEmoji}
            animate={{ rotate: [-5, 5, -5], scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            🔒
          </motion.div>

          <div className={styles.names}>
            {l.names.map((n, i) => (
              <motion.span
                key={i}
                className={i === 1 ? styles.nameAnd : styles.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
              >
                {n}
              </motion.span>
            ))}
          </div>

          <motion.p
            className={styles.message}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {l.message}
          </motion.p>

          {/* Chain of hearts */}
          <motion.div
            className={styles.chain}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {'💕 💕 💕 💕 💕'.split(' ').map((h, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
              >
                {h}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className={styles.dashedBottom} />

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className={styles.title}>{l.title}</h2>
          <button className="btn-return" onClick={back}>{l.returnButton}</button>
        </motion.div>
      </div>
    </div>
  )
}
