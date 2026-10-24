import { useRef } from 'react'
import type { PointerEvent, ReactNode } from 'react'

type Props = { children: ReactNode }

export default function MotionSurface({ children }: Props) {
  const frame = useRef<number | null>(null)
  const reset = (event: PointerEvent<HTMLDivElement>) => {
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    event.currentTarget.style.setProperty('--rotate-x', '0deg')
    event.currentTarget.style.setProperty('--rotate-y', '0deg')
  }
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover)').matches) return
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty('--rotate-x', `${-y * 6}deg`)
      element.style.setProperty('--rotate-y', `${x * 6}deg`)
    })
  }
  return <div className="motion-surface" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>{children}</div>
}
