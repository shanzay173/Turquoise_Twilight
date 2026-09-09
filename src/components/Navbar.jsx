import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [['Home', 'top'], ['Destinations', 'horizons'], ['Heritage', 'heritage'], ['Horses', 'horses'], ['Streets', 'streets'], ['Taste', 'taste'], ['Afterglow', 'afterglow'], ['Ending', 'finale']]

export default function Navbar({ menuOpen, onMenuToggle, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('top')
  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', handleScroll, { passive: true }); handleScroll(); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55% 0px' }); links.forEach(([, id]) => document.getElementById(id) && observer.observe(document.getElementById(id))); return () => { window.removeEventListener('scroll', handleScroll); observer.disconnect() } }, [])
  const navLink = ([label, id]) => <a className={active === id ? 'is-active' : ''} href={`#${id}`} key={id} onClick={onNavigate}>{label}</a>
  return <><header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}><a className="brand" href="#top" onClick={onNavigate}><span className="brand-symbol" aria-hidden="true">☾</span><span className="brand-wordmark"><strong>TÜRKİYE</strong><i>TWILIGHT</i></span></a><nav className="nav-desktop" aria-label="Primary navigation">{links.map(navLink)}</nav><a className="nav-action" href="#scenes" onClick={onNavigate}>Explore Turkey <ArrowUpRight size={15} /></a><button className="nav-menu" type="button" onClick={onMenuToggle} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button></header>{menuOpen && <nav className="nav-mobile" aria-label="Mobile navigation">{links.map(navLink)}<a className="nav-action" href="#scenes" onClick={onNavigate}>Explore Turkey <ArrowUpRight size={15} /></a></nav>}</>
}
