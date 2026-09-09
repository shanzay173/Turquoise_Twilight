import { useEffect, useState } from 'react'

export default function ScrollProgress() { const [progress, setProgress] = useState(0); useEffect(() => { const update = () => setProgress((window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)) * 100); window.addEventListener('scroll', update, { passive: true }); update(); return () => window.removeEventListener('scroll', update) }, []); return <span className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" /> }
