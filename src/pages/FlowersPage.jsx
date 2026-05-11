import { motion } from 'framer-motion'
import styles from './FlowersPage.module.css'

export default function FlowersPage({ back, content }) {
  const f = content.flowers
  const leftPoems  = f.poems.slice(0, 4)
  const rightPoems = f.poems.slice(4, 8)

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        <div className={styles.layout}>
          {/* Left poems */}
          <div className={styles.poemCol}>
            {leftPoems.map((p, i) => (
              <motion.div
                key={i}
                className={styles.poemBox}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                {p}
              </motion.div>
            ))}
          </div>

          {/* Center flower */}
          <motion.div
            className={styles.flowerCenter}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.1 }}
          >
            <motion.div
              className={styles.flowerEmoji}
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <BouquetSVG />
            </motion.div>
            <div className={styles.flowerName}>{f.flowerName}</div>
            <div className={styles.flowerSub}>{f.flowerSubtitle}</div>
          </motion.div>

          {/* Right poems */}
          <div className={styles.poemCol}>
            {rightPoems.map((p, i) => (
              <motion.div
                key={i}
                className={styles.poemBox}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.dashedBottom} />

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className={styles.title}>{f.title}</h2>
          <button className="btn-return" onClick={back}>{f.returnButton}</button>
        </motion.div>
      </div>
    </div>
  )
}

function BouquetSVG() {
  return (
    <svg width="130" height="160" viewBox="0 0 130 160" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* ── STEMS ── */}
      <path d="M65 158 Q63 135 60 118" stroke="#4a7c3f" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M65 158 Q68 133 72 116" stroke="#4a7c3f" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M65 158 Q58 130 45 115" stroke="#4a7c3f" strokeWidth="2"   strokeLinecap="round"/>
      <path d="M65 158 Q72 128 85 113" stroke="#4a7c3f" strokeWidth="2"   strokeLinecap="round"/>
      <path d="M65 158 Q55 132 30 118" stroke="#4a7c3f" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M65 158 Q75 130 98 116" stroke="#4a7c3f" strokeWidth="1.8" strokeLinecap="round"/>

      {/* ── LEAVES (long narrow lily leaves) ── */}
      <path d="M60 130 Q44 118 38 104 Q50 112 60 128Z" fill="#4a7c3f" opacity="0.9"/>
      <path d="M70 128 Q86 116 92 102 Q80 110 70 126Z" fill="#4a7c3f" opacity="0.9"/>
      <path d="M58 142 Q44 135 42 124 Q52 128 58 140Z" fill="#5a8f4e" opacity="0.8"/>
      <path d="M72 140 Q86 133 88 122 Q78 126 72 138Z" fill="#5a8f4e" opacity="0.8"/>
      {/* narrow leaf shooting up */}
      <path d="M50 110 Q42 90 46 75 Q52 88 52 108Z" fill="#4a7c3f" opacity="0.75"/>
      <path d="M82 108 Q90 88 86 73 Q80 86 80 106Z" fill="#4a7c3f" opacity="0.75"/>

      {/* ═══════════════════════════════════
          LILY HELPER — 6-petal open lily
          cx,cy = center, r = petal length,
          rot = rotation offset in degrees
          ═══════════════════════════════════ */}

      {/* ── LILY 1 — center front, fully open ── */}
      {/* 6 petals, each is a narrow pointed ellipse rotated around center */}
      {[0,60,120,180,240,300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const px = 65 + Math.cos(rad) * 22
        const py = 72 + Math.sin(rad) * 22
        return (
          <path key={i}
            d={`M65 72 Q${65+Math.cos(rad-0.35)*14} ${72+Math.sin(rad-0.35)*14} ${px} ${py} Q${65+Math.cos(rad+0.35)*14} ${72+Math.sin(rad+0.35)*14} 65 72Z`}
            fill={i % 2 === 0 ? "#f48fb1" : "#f8bbd9"}
            stroke="#e91e8c" strokeWidth="0.5" opacity="0.95"
          />
        )
      })}
      {/* petal center stripe (darker pink line down each petal) */}
      {[0,60,120,180,240,300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <line key={i}
            x1="65" y1="72"
            x2={65 + Math.cos(rad) * 20} y2={72 + Math.sin(rad) * 20}
            stroke="#d81b60" strokeWidth="0.7" opacity="0.5"
          />
        )
      })}
      {/* stamens — 6 orange filaments */}
      {[20,80,140,200,260,320].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <g key={i}>
            <line
              x1="65" y1="72"
              x2={65 + Math.cos(rad) * 10} y2={72 + Math.sin(rad) * 10}
              stroke="#8d6e00" strokeWidth="1" opacity="0.9"
            />
            <ellipse
              cx={65 + Math.cos(rad) * 11} cy={72 + Math.sin(rad) * 11}
              rx="1.8" ry="1.2"
              transform={`rotate(${deg}, ${65 + Math.cos(rad)*11}, ${72 + Math.sin(rad)*11})`}
              fill="#e65100" opacity="0.95"
            />
          </g>
        )
      })}
      <circle cx="65" cy="72" r="4" fill="#fce4ec"/>

      {/* ── LILY 2 — left, slightly turned/angled ── */}
      {[15,75,135,195,255,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const px = 35 + Math.cos(rad) * 19
        const py = 82 + Math.sin(rad) * 16
        return (
          <path key={i}
            d={`M35 82 Q${35+Math.cos(rad-0.4)*12} ${82+Math.sin(rad-0.4)*10} ${px} ${py} Q${35+Math.cos(rad+0.4)*12} ${82+Math.sin(rad+0.4)*10} 35 82Z`}
            fill={i % 2 === 0 ? "#f06292" : "#fce4ec"}
            stroke="#e91e8c" strokeWidth="0.4" opacity="0.92"
          />
        )
      })}
      {[15,75,135,195,255,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return <line key={i} x1="35" y1="82" x2={35+Math.cos(rad)*17} y2={82+Math.sin(rad)*14} stroke="#c2185b" strokeWidth="0.6" opacity="0.45"/>
      })}
      {[30,90,150,210,270,330].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <g key={i}>
            <line x1="35" y1="82" x2={35+Math.cos(rad)*9} y2={82+Math.sin(rad)*8} stroke="#8d6e00" strokeWidth="0.9" opacity="0.85"/>
            <circle cx={35+Math.cos(rad)*10} cy={82+Math.sin(rad)*9} r="1.5" fill="#bf360c" opacity="0.9"/>
          </g>
        )
      })}
      <circle cx="35" cy="82" r="3.5" fill="#fce4ec"/>

      {/* ── LILY 3 — right, slightly turned ── */}
      {[10,70,130,190,250,310].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const px = 96 + Math.cos(rad) * 19
        const py = 80 + Math.sin(rad) * 16
        return (
          <path key={i}
            d={`M96 80 Q${96+Math.cos(rad-0.4)*12} ${80+Math.sin(rad-0.4)*10} ${px} ${py} Q${96+Math.cos(rad+0.4)*12} ${80+Math.sin(rad+0.4)*10} 96 80Z`}
            fill={i % 2 === 0 ? "#f48fb1" : "#fce4ec"}
            stroke="#e91e8c" strokeWidth="0.4" opacity="0.92"
          />
        )
      })}
      {[10,70,130,190,250,310].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return <line key={i} x1="96" y1="80" x2={96+Math.cos(rad)*17} y2={80+Math.sin(rad)*14} stroke="#c2185b" strokeWidth="0.6" opacity="0.45"/>
      })}
      {[25,85,145,205,265,325].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <g key={i}>
            <line x1="96" y1="80" x2={96+Math.cos(rad)*9} y2={80+Math.sin(rad)*8} stroke="#8d6e00" strokeWidth="0.9" opacity="0.85"/>
            <circle cx={96+Math.cos(rad)*10} cy={80+Math.sin(rad)*9} r="1.5" fill="#bf360c" opacity="0.9"/>
          </g>
        )
      })}
      <circle cx="96" cy="80" r="3.5" fill="#fce4ec"/>

      {/* ── LILY 4 — top center, half-open bud ── */}
      {[270,330,30,90,150,210].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const stretch = i < 3 ? 1 : 0.55  // top petals open, bottom curled
        const px = 65 + Math.cos(rad) * 15 * stretch
        const py = 45 + Math.sin(rad) * 18 * stretch
        return (
          <path key={i}
            d={`M65 52 Q${65+Math.cos(rad-0.3)*10} ${52+Math.sin(rad-0.3)*12} ${px} ${py} Q${65+Math.cos(rad+0.3)*10} ${52+Math.sin(rad+0.3)*12} 65 52Z`}
            fill={i < 3 ? "#f48fb1" : "#f8bbd9"}
            stroke="#e91e8c" strokeWidth="0.4" opacity="0.9"
          />
        )
      })}
      {/* bud stamens peeking */}
      {[260,300,340].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <g key={i}>
            <line x1="65" y1="52" x2={65+Math.cos(rad)*8} y2={52+Math.sin(rad)*9} stroke="#8d6e00" strokeWidth="0.9" opacity="0.8"/>
            <circle cx={65+Math.cos(rad)*9} cy={52+Math.sin(rad)*10} r="1.4" fill="#e65100" opacity="0.9"/>
          </g>
        )
      })}
      <circle cx="65" cy="52" r="3" fill="#fce4ec"/>

      {/* ── LILY 5 — far left, side view (elongated petals) ── */}
      {[-30,30,90,150,210,270].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const px = 18 + Math.cos(rad) * 16
        const py = 95 + Math.sin(rad) * 12
        return (
          <path key={i}
            d={`M18 95 Q${18+Math.cos(rad-0.5)*9} ${95+Math.sin(rad-0.5)*8} ${px} ${py} Q${18+Math.cos(rad+0.5)*9} ${95+Math.sin(rad+0.5)*8} 18 95Z`}
            fill="#f8bbd9" stroke="#e91e8c" strokeWidth="0.4" opacity="0.85"
          />
        )
      })}
      <circle cx="18" cy="95" r="3" fill="#fce4ec"/>

      {/* ── GLASS VASE ── */}
      {/* vase body */}
      <path d="M42 122 Q40 140 38 158 L92 158 Q90 140 88 122 Z"
        fill="none" stroke="#90caf9" strokeWidth="2" opacity="0.6"/>
      <path d="M42 122 Q40 140 38 158 L92 158 Q90 140 88 122 Z"
        fill="#e3f2fd" opacity="0.25"/>
      {/* vase opening ellipse */}
      <ellipse cx="65" cy="122" rx="23" ry="5" fill="none" stroke="#90caf9" strokeWidth="1.5" opacity="0.5"/>
      {/* water reflection */}
      <path d="M46 135 Q52 132 58 135" stroke="#bbdefb" strokeWidth="1" opacity="0.7" fill="none"/>
      <path d="M50 142 Q58 139 66 142" stroke="#bbdefb" strokeWidth="1" opacity="0.6" fill="none"/>
      {/* vase shine */}
      <path d="M44 128 Q43 140 42 152" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>

      {/* ── SPARKLES ── */}
      <text x="102" y="58" fontSize="11" opacity="0.65">✨</text>
      <text x="8"   y="70" fontSize="9"  opacity="0.55">✨</text>
      <text x="108" y="92" fontSize="8"  opacity="0.5">⭐</text>
    </svg>
  )
}
