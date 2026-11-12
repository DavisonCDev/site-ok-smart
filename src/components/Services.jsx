const services = [
  {
    title: 'Sites Institucionais',
    desc: 'Websites modernos, responsivos e otimizados para converter visitantes em clientes.',
    icon: MonitorIcon,
  },
  {
    title: 'Aplicações Web',
    desc: 'Sistemas robustos e escaláveis com as melhores tecnologias do mercado.',
    icon: CodeIcon,
  },
  {
    title: 'Soluções Personalizadas',
    desc: 'Automatize processos e integre ferramentas conforme a necessidade do seu negócio.',
    icon: RocketIcon,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 bg-ok-navy overflow-hidden">
      <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-ok-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Nossos <span className="text-ok-cyan">serviços</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Tecnologia de ponta para transformar ideias em resultados.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-ok-dark border border-white/10 hover:border-ok-cyan/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,140,255,0.15)] transition-all duration-300"
            >
              <div className="mb-6 text-ok-cyan drop-shadow-[0_0_12px_rgba(0,212,255,0.45)] group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-11 h-11" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-white group-hover:text-ok-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MonitorIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function CodeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function RocketIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
