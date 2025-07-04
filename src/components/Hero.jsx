import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const handleCalendlyClick = () => {
    // Replace with your actual Calendly URL
    window.open('https://calendly.com/your-calendly-link', '_blank')
  }

  // Type animation keywords
  const keywords = [
    '"Leads"',
    '"Revenue"',
    '"Growth"',
    '"Deals"',
    '"Influence"',
    '"Leverage"',
    '"Sales"',
    
  ]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = keywords[currentWordIndex]
    let typeSpeed = 140 // slower typing speed
    if (isDeleting) {
      typeSpeed = 90 // slower deleting speed
    }

    let timer
    if (!isDeleting && displayedText !== currentWord) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1))
      }, typeSpeed)
    } else if (isDeleting && displayedText !== '') {
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1))
      }, typeSpeed)
    } else if (!isDeleting && displayedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1600) // longer pause at full word
    } else if (isDeleting && displayedText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % keywords.length)
      }, 600) // longer pause before next word
    }
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentWordIndex, keywords])

  return (
    <section className="section-padding" aria-label="Hero Section">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>
            Not just clicks,{' '}
            <span style={{ color: '#2563eb', minWidth: '7ch', display: 'inline-block' }}>{displayedText}<span className="blinking-cursor" aria-hidden="true">|</span></span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>
            On site Ad creation combined with expert Media Buyers all in one place.
          </p>
          {/* Minimal 3-step process */}
          <div className="flex flex-col items-center mb-8" role="region" aria-label="Our 3-step process">
            <h2 className="sr-only">How We Work</h2>
            <div className="flex flex-row gap-8 justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-700 mb-2" aria-label="Step 1">1</div>
                <span className="text-sm text-gray-700">Book Call</span>
              </div>
              <span className="text-2xl text-gray-400" aria-hidden="true">→</span>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-700 mb-2" aria-label="Step 2">2</div>
                <span className="text-sm text-gray-700">Get Plan</span>
              </div>
              <span className="text-2xl text-gray-400" aria-hidden="true">→</span>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-700 mb-2" aria-label="Step 3">3</div>
                <span className="text-sm text-gray-700">Witness Results</span>
              </div>
            </div>
          </div>

          {/* CTA Button for Booking */}
          <div className="flex justify-center mb-8">
            <Link to="/book" className="btn-electric text-lg px-10 py-4 animate-pulse-slow">
              Book your Free Discovery Call
            </Link>
          </div>

          {/* Animated Down Arrow */}
          <div className="flex justify-center mt-4">
            <span className="animate-bounce text-3xl text-gray-400">↓</span>
          </div>

          {/* Bullet Points */}
          <div className="mt-12 max-w-3xl mx-auto" role="region" aria-label="What we offer">
            <h3 className="sr-only">Our Services</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg mt-0.5">✅</span>
                <p className="text-gray-700 leading-relaxed">Custom-shot photo/video ads designed to stop scrolls and book jobs — not just get clicks</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg mt-0.5">✅</span>
                <p className="text-gray-700 leading-relaxed">All-in-one campaign setup, targeting, and weekly optimization — done for you, no tech headaches</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg mt-0.5">✅</span>
                <p className="text-gray-700 leading-relaxed">Local lead generation strategy built specifically for Austin-area service pros — not cookie-cutter templates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .blinking-cursor {
        animation: blink 1s steps(2, start) infinite;
      }
      @keyframes blink {
        to {
          visibility: hidden;
        }
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      `}</style>
    </section>
  )
}

export default Hero 