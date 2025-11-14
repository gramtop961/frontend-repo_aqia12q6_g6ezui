import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${backend}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact' }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus('Thanks! We will get back to you shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Let’s Build Together</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Tell us about your project and goals.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/10">
            <form onSubmit={onSubmit} className="grid gap-4">
              <input value={form.name} onChange={(e)=>setForm(f=>({...f, name:e.target.value}))} placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-600/70 outline-none border border-transparent focus:border-indigo-500/50" />
              <input value={form.email} onChange={(e)=>setForm(f=>({...f, email:e.target.value}))} placeholder="Email" type="email" className="w-full px-4 py-3 rounded-xl bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-600/70 outline-none border border-transparent focus:border-indigo-500/50" />
              <textarea value={form.message} onChange={(e)=>setForm(f=>({...f, message:e.target.value}))} placeholder="Tell us a bit about your idea" rows={5} className="w-full px-4 py-3 rounded-xl bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-600/70 outline-none border border-transparent focus:border-indigo-500/50" />
              <button type="submit" className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow inline-flex items-center gap-2 justify-center">Send Message</button>
              {status && <p className="text-sm text-gray-700 dark:text-gray-300">{status}</p>}
            </form>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl p-6 bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-white/10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Why Logic Peak?</h3>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Senior engineers, designers, and AI specialists</li>
              <li>Proven playbooks to go from idea to production fast</li>
              <li>Transparent communication and weekly demos</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
