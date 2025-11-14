import SiteFrame from '../components/SiteFrame'

export default function Careers() {
  const roles = [
    { title: 'Senior Frontend Engineer', type: 'Remote', tags: ['React', 'TypeScript', 'Tailwind'] },
    { title: 'Product Designer', type: 'Remote', tags: ['Figma', 'Design Systems', 'Prototyping'] },
    { title: 'Full-Stack Engineer', type: 'Hybrid - Colombo', tags: ['FastAPI', 'MongoDB', 'DevOps'] },
  ]

  return (
    <SiteFrame>
      <section className="pt-28" id="careers">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Careers</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">Join a small, senior team shipping ambitious products for global clients.</p>

          <div className="mt-10 grid gap-4">
            {roles.map((r) => (
              <a key={r.title} href="#" className="group p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-xl flex items-center justify-between">
                <div>
                  <h3 className="font-semibold group-hover:text-indigo-600 transition">{r.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{r.type}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-900/5 dark:bg-white/10 text-gray-700 dark:text-gray-300">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-indigo-600">Apply →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  )
}
