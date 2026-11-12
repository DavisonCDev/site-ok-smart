import { useEffect, useRef } from 'react'
import waves from '../assets/waves-left.jpg'
import serviceIcons from '../assets/service-icons.png'

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Ondas laterais */}
      <img
        src={waves}
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[60%] max-w-[980px] object-cover object-left opacity-60 mix-blend-screen pointer-events-none animate-drift [mask-image:linear-gradient(to_right,black_50%,transparent_95%)]"
      />
      <img
        src={waves}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-[55%] max-w-[900px] object-cover object-left -scale-x-100 opacity-50 mix-blend-screen pointer-events-none animate-drift-slow [mask-image:linear-gradient(to_left,black_45%,transparent_95%)]"
      />

      {/* Glows de canto */}
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] bg-ok-blue/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] bg-ok-purple/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(4,6,13,0.85)_100%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-24 pb-16">
        <img
          ref={logoRef}
          src="logo.png"
          alt="OK Smart"
          className="w-full max-w-md md:max-w-xl animate-fade-in-up"
        />

        <div className="mt-10 flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <span className="hidden sm:block h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-ok-cyan/70" />
          <p className="text-xs md:text-sm font-medium tracking-[0.45em] md:tracking-[0.55em] text-gray-300 uppercase pl-[0.45em]">
            Tecnologia que impulsiona
          </p>
          <span className="hidden sm:block h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-ok-cyan/70" />
        </div>

        <img
          src={serviceIcons}
          alt=""
          aria-hidden="true"
          className="mt-10 w-full max-w-xs animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <a
            href="#services"
            className="px-7 py-3.5 font-semibold text-ok-dark bg-ok-cyan rounded-full hover:bg-white hover:shadow-[0_0_32px_rgba(0,212,255,0.6)] hover:-translate-y-1 transition-all duration-300"
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
    </section>
  )
}
