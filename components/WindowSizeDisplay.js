'use client'
import { useWindowSize } from '@/components/WindowSize'

export default function WindowSizeDisplay() {
  const { width, height } = useWindowSize()
  return <div>Window: {width} x {height}</div>
}