'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [activeTab, setActiveTab] = useState<'message' | 'meet'>('message')
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    // Placeholder for Web3Forms or EmailJS API integration
    setTimeout(() => setFormStatus('success'), 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 bottom-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.15)] border border-white/60 z-[101] w-auto max-w-md md:w-[480px]"
          >
            {/* Header & Close Button */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-dark-text">Start a Conversation</h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-dark-text transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex items-center p-1 bg-black/5 rounded-full mb-6">
              <button
                onClick={() => setActiveTab('message')}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${activeTab === 'message' ? 'bg-white shadow-sm text-dark-text' : 'text-sage hover:text-dark-text'}`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('meet')}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${activeTab === 'meet' ? 'bg-white shadow-sm text-dark-text' : 'text-sage hover:text-dark-text'}`}
              >
                Schedule Meeting
              </button>
            </div>

            {/* Content Area */}
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait">
                {activeTab === 'message' ? (
                  <motion.form
                    key="message-form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    {formStatus === 'success' ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-4">
                          ✓
                        </div>
                        <h3 className="font-serif text-xl mb-2 text-dark-text">Message Sent!</h3>
                        <p className="text-sage text-sm">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                      </div>
                    ) : (
                      <>
                        <div>
                          <label htmlFor="name" className="sr-only">Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            required 
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-2xl bg-white/50 border border-black/5 focus:outline-none focus:border-coral/50 transition-colors text-dark-text placeholder:text-sage"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="sr-only">Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            required 
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-2xl bg-white/50 border border-black/5 focus:outline-none focus:border-coral/50 transition-colors text-dark-text placeholder:text-sage"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="sr-only">Message</label>
                          <textarea 
                            id="message" 
                            required 
                            placeholder="How can I help you?"
                            rows={4}
                            className="w-full px-4 py-3 rounded-2xl bg-white/50 border border-black/5 focus:outline-none focus:border-coral/50 transition-colors text-dark-text placeholder:text-sage resize-none"
                          />
                        </div>
                        <button 
                          type="submit" 
                          disabled={formStatus === 'sending'}
                          className="w-full bg-dark-text text-white font-medium py-4 rounded-2xl hover:bg-black transition-colors disabled:opacity-70 mt-2"
                        >
                          {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                      </>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="meet-tab"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-2xl mb-4">
                      🗓
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-dark-text">Schedule a Time</h3>
                    <p className="text-sage text-sm mb-6">Pick a convenient slot directly on my calendar.</p>
                    
                    {/* Placeholder for Calendly embed or link */}
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-coral text-white font-medium px-6 py-3 rounded-full hover:bg-coral/90 transition-colors"
                    >
                      Open Calendar ↗
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
