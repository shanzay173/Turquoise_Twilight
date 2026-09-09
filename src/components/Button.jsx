import { ArrowUpRight } from 'lucide-react'
import './Button.css'

export default function Button({ children, href = '#top', variant = 'red' }) {
  return <a className={`tw-button tw-button--${variant}`} href={href}>{children}<ArrowUpRight size={15} /></a>
}
