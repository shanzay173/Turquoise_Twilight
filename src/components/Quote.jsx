import Reveal from './Reveal'
import './Quote.css'

export default function Quote({ children }) { return <section className="quote-section"><Reveal><p>THE STORY BETWEEN PLACES</p><blockquote>“{children}”</blockquote></Reveal></section> }
