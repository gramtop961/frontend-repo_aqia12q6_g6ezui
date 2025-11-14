import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ChatWidget from './ChatWidget'

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch {}
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

export default function SiteFrame({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {}
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0A0A0F' : '#ffffff')
    }
    return () => {
      root.classList.remove('dark')
      root.style.colorScheme = ''
    }
  }, [theme])

  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0F] text-gray-900 dark:text-white selection:bg-indigo-600/30">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <footer className="border-t border-black/10 dark:border-white/10 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-2 items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Logic Peak (Pvt. Ltd.). All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
            <a href="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="/services" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Services</a>
            <a href="/work" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Work</a>
            <a href="/careers" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Careers</a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Blog</a>
            <a href="/privacy" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Privacy</a>
            <a href="/terms" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  )
}
