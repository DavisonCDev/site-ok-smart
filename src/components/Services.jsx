const services = [
  {
    title: 'Sites Institucionais',
    desc: 'Websites modernos, responsivos e otimizados para converter visitantes em clientes.',
    icon: '🌐',
  },
  {
    title: 'Aplicações Web',
    desc: 'Sistemas robustos e escaláveis com as melhores tecnologias do mercado.',
    icon: '⚙️',
  },
  {
    title: 'Soluções Personalizadas',
    desc: 'Automatize processos e integre ferramentas conforme a necessidade do seu negócio.',
    icon: '🚀',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-ok-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nossos <span className="text-ok-cyan">serviços</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Tecnologia de ponta para transformar ideias em resultados.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-ok-dark border border-white/10 hover:border-ok-cyan/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] transition-all duration-300"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-ok-cyan transition-colors duration-300">
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
