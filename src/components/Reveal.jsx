import { motion } from 'framer-motion'
import './Reveal.css'

export default function Reveal({ children, delay = 0, className = '', once = true }) {
  return <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once, amount: .12 }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay, ease: [0.16, 1, .3, 1] } } }}>{children}</motion.div>
}
