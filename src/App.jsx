import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Culture from './components/Culture'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'

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

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    // Hint to UA for form controls, etc.
    root.style.colorScheme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {}

    // Update theme-color for mobile browsers
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0A0A0F' : '#ffffff')
    }

    return () => {
      root.classList.remove('dark')
      root.style.colorScheme = ''
    }
  }, [theme])

  // Smooth scrolling behavior
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

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Culture />
        <Contact />
      </main>

      <footer className="border-t border-black/10 dark:border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Logic Peak (Pvt. Ltd.). All rights reserved.</p>
          <a href="#home" className="text-sm text-indigo-600 hover:text-indigo-500">Back to top</a>
        </div>
      </footer>

      {/* Chatbot bubble */}
      <ChatWidget />
    </div>
  )
}

export default App
