"use client"

import { useState } from "react"

import { useEffect, useRef } from "react"

export function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }>
  >([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    particlesRef.current = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "#8b5cf6" : "#06b6d4",
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current

      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      particles.forEach((particle) => {
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1

        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 border border-secondary/20 rounded-lg animate-spin-slow" />
        <div className="absolute top-40 right-20 w-12 h-12 border border-cyan-400/20 rounded-full animate-bounce" />
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-secondary/10 rotate-45 animate-pulse" />
        <div className="absolute bottom-20 right-40 w-8 h-8 bg-secondary/10 rounded-full animate-ping" />
        <div className="absolute top-60 left-1/3 w-6 h-6 bg-cyan-400/20 rotate-45 animate-spin" />
        <div className="absolute top-80 right-1/4 w-14 h-14 border-2 border-secondary/15 rounded-lg animate-pulse" />
        <div className="absolute bottom-60 left-1/2 w-10 h-10 border border-cyan-400/15 rounded-full animate-bounce" />
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="2" fill="#8b5cf6" />
              <circle cx="90" cy="90" r="2" fill="#06b6d4" />
              <path d="M50,10 L50,50 L90,50" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div
        className="fixed w-96 h-96 pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed w-64 h-64 pointer-events-none z-0 transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: "radial-gradient(circle, rgba(6,182,212,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-32 left-1/4 animate-float">
          <div className="w-8 h-8 border border-secondary/20 rounded rotate-45 animate-spin-slow" />
        </div>
        <div className="absolute top-96 right-1/3 animate-float-delayed">
          <div className="w-6 h-6 bg-cyan-400/10 rounded-full animate-pulse" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float">
          <div className="w-10 h-10 border-2 border-secondary/15 rounded-lg animate-bounce" />
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse delay-1000" />
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse delay-500" />
      </div>
    </>
  )
}
