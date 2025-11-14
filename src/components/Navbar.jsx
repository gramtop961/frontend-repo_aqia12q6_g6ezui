import { useEffect, useState } from 'react'
import { Menu, X, MountainSnow, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#culture', label: 'Culture' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <MountainSnow className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          <span className="font-extrabold tracking-tight text-gray-900 dark:text-white">Logic Peak</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full p-2 bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white">
            <AnimatePresence initial={false} mode="wait">
              {theme === 'dark' ? (
                <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold shadow-sm hover:shadow-md transition">Get in touch</a>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full p-2 bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white">
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button onClick={() => setOpen((v) => !v)} className="p-2 rounded-md bg-gray-900/5 dark:bg-white/10">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden px-4 pb-4">
            <div className="grid gap-2 rounded-xl p-3 bg-white/70 dark:bg-black/40 border border-white/20 dark:border-white/10">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold shadow-sm">Get in touch</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
