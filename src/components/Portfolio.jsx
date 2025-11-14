import { motion } from 'framer-motion'

const works = [
  {
    title: 'Fintech Analytics Dashboard',
    tags: ['Next.js', 'RAG', 'Timeseries'],
  },
  {
    title: 'AI Customer Support Assistant',
    tags: ['Agent', 'Vector DB', 'Realtime'],
  },
  {
    title: 'E-commerce Headless Platform',
    tags: ['Remix', 'Edge', 'CDN'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Selected Work</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">A few recent projects showcasing our range.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div key={w.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative rounded-2xl p-6 bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{w.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-900/5 dark:bg-white/10 text-gray-700 dark:text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
