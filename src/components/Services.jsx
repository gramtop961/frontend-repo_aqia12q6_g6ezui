import { Brain, Bot, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const cards = [
  {
    icon: Globe,
    title: 'Web Apps',
    desc: 'High-performance web applications with modern stacks and cloud-native patterns.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Brain,
    title: 'AI Automation',
    desc: 'Automate workflows with AI pipelines, RAG, data agents, and orchestration.',
    gradient: 'from-violet-500 to-fuchsia-600',
  },
  {
    icon: Bot,
    title: 'Agentic Apps',
    desc: 'Interactive agent applications with tools, memory, and real-time reasoning.',
    gradient: 'from-amber-500 to-rose-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.2),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">What We Build</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Focused capabilities to ship business value fast.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className={`group relative rounded-2xl p-6 bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 overflow-hidden`}
            >
              <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br ${c.gradient} opacity-30 blur-3xl group-hover:opacity-50 transition`} />
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${c.gradient} text-white shadow-lg`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{c.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
