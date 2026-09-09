import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
	const [active, setActive] = useState(false)
	const [label, setLabel] = useState('')
	const cursorRef = useRef(null)

	useEffect(() => {
		if (!window.matchMedia('(pointer: fine)').matches) return undefined
		const cursor = cursorRef.current
		let pointerX = -100
		let pointerY = -100
		let ringX = pointerX
		let ringY = pointerY
		let frameId
		const moveCursor = (event) => { pointerX = event.clientX; pointerY = event.clientY; cursor?.classList.add('custom-cursor--visible') }
		const renderCursor = () => {
			ringX += (pointerX - ringX) * .18
			ringY += (pointerY - ringY) * .1
			if (cursor) cursor.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
			frameId = window.requestAnimationFrame(renderCursor)
		}
		const handlePointerOver = (event) => {
			const target = event.target.closest('a, button, [role="button"]')
			setActive(Boolean(target))
			setLabel(target?.getAttribute('aria-label') || (target?.tagName === 'A' ? 'Open' : 'View'))
		}
		const handlePointerOut = (event) => { if (!event.relatedTarget) cursor?.classList.remove('custom-cursor--visible') }
		document.addEventListener('pointermove', moveCursor, { passive: true })
		document.addEventListener('pointerover', handlePointerOver)
		document.addEventListener('pointerout', handlePointerOut)
		frameId = window.requestAnimationFrame(renderCursor)
		return () => { document.removeEventListener('pointermove', moveCursor); document.removeEventListener('pointerover', handlePointerOver); document.removeEventListener('pointerout', handlePointerOut); window.cancelAnimationFrame(frameId) }
	}, [])

	return <span ref={cursorRef} className={`custom-cursor ${active ? 'custom-cursor--active' : ''}`} aria-hidden="true"><i /><b>{label}</b></span>
}
