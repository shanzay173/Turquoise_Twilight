import { useState } from 'react'
import './CinematicImage.css'

const fallback = '/images/hero/Bosphorous night.jpeg'

export default function CinematicImage({ src, alt, className = '' }) {
  const [source, setSource] = useState(src)
  return <figure className={`cinematic-image ${className}`}><img src={source} alt={alt} loading="lazy" onError={() => setSource(fallback)} /><span /></figure>
}
