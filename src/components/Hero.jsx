import { useEffect, useRef } from 'react'

export default function Hero({ onLogoVisibilityChange }) {
  const logoRef = useRef(null)

  useEffect(() => {
    const logo = logoRef.current
    if (!logo) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        onLogoVisibilityChange(!entry.isIntersecting)
      },
      { threshold: 0.1, rootMargin: '-100px 0px 0px 0px' }
    )

    observer.observe(logo)
    return () => observer.disconnect()
  }, [onLogoVisibilityChange])

  return (
    <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,217,255,0.15),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Soluções digitais <br />
            <span className="text-ok-cyan drop-shadow-[0_0_18px_rgba(0,217,255,0.6)]">
              inteligentes
            </span>{' '}
            para seu negócio
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Sites, aplicações e soluções tecnológicas sob medida para impulsionar sua empresa no mundo digital.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="px-7 py-3.5 font-semibold text-ok-dark bg-ok-cyan rounded-full hover:bg-white hover:shadow-[0_0_32px_rgba(0,217,255,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              Conheça nossos serviços
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 font-semibold text-white border border-white/20 rounded-full hover:border-ok-cyan hover:text-ok-cyan hover:-translate-y-1 transition-all duration-300"
            >
              Fale conosco
            </a>
          </div>
        </div>
        <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute w-80 h-80 bg-ok-cyan/20 rounded-full blur-3xl animate-glow-pulse" />
          <img
            ref={logoRef}
            src="logo.png"
            alt="OK Smart"
            className="relative w-full max-w-md drop-shadow-[0_0_40px_rgba(0,217,255,0.4)]"
          />
        </div>
      </div>
    </section>
  )
}
