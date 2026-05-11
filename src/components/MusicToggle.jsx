import { motion } from 'framer-motion'

export default function MusicToggle({ on, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      title={on ? 'Pause music' : 'Play music'}
      style={{
        position: 'fixed', top: '1rem', right: '1rem',
        width: '40px', height: '40px', borderRadius: '50%',
        border: '1.5px solid var(--red-pale)',
        background: 'var(--paper)', cursor: 'pointer',
        fontSize: '1.1rem', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {on ? '🎵' : '🔇'}
    </motion.button>
  )
}
