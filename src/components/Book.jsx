import React from 'react'

const Book = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full p-0 m-0" style={{ background: 'white' }}>
      <iframe
        src="https://calendly.com/gabrianreedmarketing/30min"
        className="w-full max-w-3xl h-screen rounded-xl border border-gray-200 shadow-md"
        frameBorder="0"
        title="Book a Call"
        style={{ minHeight: '600px' }}
      ></iframe>
    </section>
  )
}

export default Book 