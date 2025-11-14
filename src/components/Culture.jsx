import { motion } from 'framer-motion'

const values = [
  { title: 'Ownership', text: 'We think like owners and ship with pride.' },
  { title: 'Craft', text: 'We obsess over details that create delight.' },
  { title: 'Velocity', text: 'We move fast without breaking quality.' },
  { title: 'Learning', text: 'We iterate, measure, and improve constantly.' },
]

export default function Culture() {
  return (
    <section id="culture" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Culture & Values</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">How we partner with teams and build together.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/10">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{v.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
