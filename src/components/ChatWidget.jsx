import { useEffect, useMemo, useRef, useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

function uuid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

export default function ChatWidget() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [messages, setMessages] = useState(() => {
    const cached = localStorage.getItem('lp_chat_history')
    return cached ? JSON.parse(cached) : []
  })
  const sessionId = useMemo(() => {
    const key = 'lp_chat_session'
    const existing = localStorage.getItem(key)
    if (existing) return existing
    const id = uuid()
    localStorage.setItem(key, id)
    return id
  }, [])
  const scrollerRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('lp_chat_history', JSON.stringify(messages))
    if (open && scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight
    }
  }, [messages, open])

  const sendMessage = async () => {
    if (!input.trim()) return
    const text = input.trim()
    setInput('')
    setSending(true)
    const userMsg = { role: 'user', text, ts: Date.now() }
    setMessages((m) => [...m, userMsg])
    try {
      const res = await fetch(`${backend}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, text, source: 'chat' }),
      })
      if (!res.ok) throw new Error('Failed to send')
      // Simple auto-reply placeholder on client for UX (backend stores message)
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          { role: 'assistant', text: 'Thanks! Our team will reach out shortly. Want to share your email?', ts: Date.now() },
        ])
      }, 400)
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: 'system', text: 'Message failed to send. Please try again.', ts: Date.now() },
      ])
    } finally {
      setSending(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          aria-label="Open chat"
          onClick={() => setOpen(true)}
          className="rounded-full p-4 shadow-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Chat with Logic Peak"
          className="w-[92vw] max-w-sm h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/90 dark:bg-[#0B0B10]/90 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
            <div className="font-semibold">Chat with Logic Peak</div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={scrollerRef} className="h-[calc(100%-120px)] overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Hi! Ask anything about projects, capabilities, or timelines.
              </p>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`max-w-[85%] ${m.role === 'user' ? 'ml-auto' : ''}`}>
                <div className={`${m.role === 'user' ? 'bg-indigo-600 text-white' : m.role === 'assistant' ? 'bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white' : 'bg-amber-500/10 text-amber-700 dark:text-amber-300'} rounded-2xl px-4 py-2 inline-block`}>{m.text}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-3 flex items-center gap-2">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              className="flex-1 resize-none rounded-xl px-3 py-2 bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500/80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={sendMessage}
              disabled={sending || !input.trim()}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-indigo-600 text-white disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
