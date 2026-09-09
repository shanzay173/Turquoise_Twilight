import { useState } from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import Footer from './Footer'
import FilmGrain from './FilmGrain'
import CustomCursor from './CustomCursor'
import ScrollProgress from './ScrollProgress'
import './Layout.css'
import Hero from '../sections/Hero'
import Horizons from '../sections/Horizons'
import Wander from '../sections/Wander'
import Rituals from '../sections/Rituals'
import TurkeyScenes from '../sections/TurkeyScenes'
import RegionalScenes from '../sections/RegionalScenes'
import Echoes from '../sections/Echoes'
import Horses from '../sections/Horses'
import BosphorusDrift from '../sections/BosphorusDrift'
import Afterglow from '../sections/Afterglow'
import LoadingScreen from './LoadingScreen'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  return <div className={`twilight-layout ${loading ? 'twilight-layout--loading' : ''}`}>{loading && <LoadingScreen onReady={() => setLoading(false)} />}<Navbar menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} onNavigate={() => setMenuOpen(false)} /><ScrollProgress /><ScrollToTop /><CustomCursor /><FilmGrain /><main><Hero /><Horizons /><Echoes /><Horses /><BosphorusDrift /><Wander /><Rituals /><TurkeyScenes /><RegionalScenes /><Afterglow /></main><Footer /></div>
}
