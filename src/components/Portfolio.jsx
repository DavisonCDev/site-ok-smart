const projects = [
  {
    name: 'Lunardes',
    url: 'https://www.lunardes.com.br',
    description: 'Site oficial da banda Lunardes com discografia, agenda de shows, conteúdos exclusivos e loja de e-commerce para venda de merchandising.',
    tags: ['Site de Banda', 'E-commerce', 'Merchandising'],
  },
  {
    name: 'Lets Organiza',
    url: 'https://www.letsorganiza.com.br',
    description: 'Site de Personal Organizer com mostruário de trabalhos realizados, apresentação de serviços e canal para orçamentos e agendamentos.',
    tags: ['Personal Organizer', 'Mostruário', 'Serviços'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-6 bg-ok-dark overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-ok-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Nosso <span className="text-ok-cyan">portfólio</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Clique para visitar ou navegue pelas prévias ao vivo dos projetos entregues.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-2xl overflow-hidden bg-ok-gray border border-white/10 hover:border-ok-cyan/50 hover:shadow-[0_0_40px_rgba(0,140,255,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-ok-dark border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 bg-ok-gray px-3 py-1 rounded-full truncate text-center">
                    {project.url}
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] bg-white overflow-hidden">
                <iframe
                  src={project.url}
                  title={project.name}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ok-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-ok-cyan transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-ok-cyan bg-ok-cyan/10 rounded-full border border-ok-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 text-sm font-medium text-ok-cyan hover:text-white transition-colors duration-300"
                >
                  Visitar site
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
