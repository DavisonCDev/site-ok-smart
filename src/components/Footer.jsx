export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 bg-ok-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Vamos construir algo <span className="text-ok-cyan">incrível</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            Entre em contato e transforme sua presença digital com a OK Smart.
          </p>
          <a
            href="mailto:contato@oksmart.com"
            className="inline-block px-7 py-3.5 font-semibold text-ok-dark bg-ok-cyan rounded-full hover:bg-white hover:shadow-[0_0_32px_rgba(0,217,255,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            contato@oksmart.com
          </a>
        </div>
        <div className="text-center md:text-right text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} OK Smart. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
