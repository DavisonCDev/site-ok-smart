import { useState } from 'react'

export default function Header({ showLogo }) {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ok-dark/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group h-10">
          <img
            src="/logo.png"
            alt="OK Smart"
            className={`h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,217,255,0.5)] group-hover:scale-105 transition-all duration-500 ease-out ${
              showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-ok-cyan transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ok-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-ok-dark bg-ok-cyan rounded-full hover:bg-white hover:shadow-[0_0_24px_rgba(0,217,255,0.5)] transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-ok-gray border-t border-white/10 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-300 hover:text-ok-cyan transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
