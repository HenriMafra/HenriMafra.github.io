import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    return !reduced && !coarse
  })

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-cursor')
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px)`
      const t = e.target
      const interactive = t.closest && t.closest('a, button, [data-magnetic], input, select, textarea, label')
      if (ring.current) ring.current.classList.toggle('cursor-ring--hot', !!interactive)
    }
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    const onDown = () => ring.current && ring.current.classList.add('cursor-ring--down')
    const onUp = () => ring.current && ring.current.classList.remove('cursor-ring--down')

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
