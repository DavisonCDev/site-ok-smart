import { getWhatsAppUrl, INSTAGRAM_URL } from '../data/contact'

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <footer id="contact" className="relative py-16 px-6 bg-ok-navy border-t border-white/5 overflow-hidden">
      <div className="absolute -top-24 right-1/4 w-[380px] h-[380px] bg-ok-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <h2 className="font-display text-3xl font-bold mb-4">
            Vamos construir algo <span className="text-ok-cyan">incrível</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            Entre em contato pelo WhatsApp e transforme sua presença digital com a OK Smart.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 font-semibold text-ok-dark bg-ok-cyan rounded-full hover:bg-white hover:shadow-[0_0_32px_rgba(0,212,255,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da OK Smart"
              className="inline-flex items-center gap-3 px-7 py-3.5 font-semibold text-white border border-white/20 rounded-full hover:border-ok-cyan hover:text-ok-cyan hover:-translate-y-1 transition-all duration-300"
            >
              <InstagramIcon className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center md:text-right text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} OK Smart. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.358-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.56 5.965L0 24l6.335-1.652a11.88 11.88 0 005.715 1.46h.003c6.553 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
