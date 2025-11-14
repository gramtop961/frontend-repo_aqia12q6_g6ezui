import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Culture from './components/Culture'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    return () => document.documentElement.classList.remove('dark')
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

      <footer className="border-t border-white/10 py-10">
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
