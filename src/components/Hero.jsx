import { Suspense } from 'react'
import { motion } from 'framer-motion'

let Spline
try {
  // Lazy import at runtime to enable code-splitting and faster TTI
  Spline = (await import('@splinetool/react-spline')).default
} catch (e) {
  Spline = null
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-indigo-950 via-black to-violet-900" />}> 
          {Spline ? (
            <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-black to-violet-900" />
          )}
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-violet-600/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10">
        <div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Peak Innovation in Software & AI
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-4 text-lg md:text-xl text-white/80">
            Building smart solutions for the next digital era. Web apps, AI automation, and agentic applications crafted for scale and impact.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="px-5 py-3 rounded-full bg-white text-gray-900 font-semibold shadow inline-flex items-center gap-2">Explore Services</a>
            <a href="#contact" className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow inline-flex items-center gap-2">Start a Project</a>
          </motion.div>
        </div>

        <div className="hidden md:flex items-center justify-end">
          <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 text-white max-w-sm">
            <p className="text-sm uppercase tracking-widest text-white/60">About</p>
            <p className="mt-2 text-white/90">Logic Peak empowers businesses with modern web development, AI automation, and cutting-edge agentic applications.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
