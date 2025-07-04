import React, { useState } from 'react'

const Footer = () => {
  const [modal, setModal] = useState(null)

  const handleOpenModal = (type) => setModal(type)
  const handleCloseModal = () => setModal(null)

  return (
    <footer className="text-black" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>
      <div className="container-custom py-16 md:py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="text-3xl md:text-2xl font-bold text-primary-400 mb-6 md:mb-4">
              BlackBear
            </div>
            <p className="text-black mb-8 md:mb-6 max-w-md mx-auto md:mx-0 text-base md:text-sm leading-relaxed">
              A full-stack ad creation and media buying service helping Texas home service businesses book more jobs and grow their revenue.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 md:space-x-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline transition-colors">
                <svg className="w-7 h-7 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline transition-colors">
                <svg className="w-7 h-7 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-lg font-semibold mb-6 md:mb-4">Services</h3>
            <ul className="space-y-3 md:space-y-2 text-black">
              <li><a href="#services" className="hover:underline transition-colors text-base md:text-sm">Ad Creation</a></li>
              <li><a href="#services" className="hover:underline transition-colors text-base md:text-sm">Media Buying</a></li>
              <li><a href="#services" className="hover:underline transition-colors text-base md:text-sm">Lead Tracking</a></li>
              <li><a href="#services" className="hover:underline transition-colors text-base md:text-sm">Campaign Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-lg font-semibold mb-6 md:mb-4">Contact</h3>
            <ul className="space-y-3 md:space-y-2 text-black">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-base md:text-sm">Texas, USA</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-base md:text-sm break-all">Gabrianreedmarketing@icloud.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-base md:text-sm">(231) 292-8304</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 md:mt-12 pt-10 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-black text-base md:text-sm text-center md:text-left">
            © 2025 BlackBear Creative Studio. All rights reserved.
          </p>
          <div className="flex space-x-8 md:space-x-6">
            <button onClick={() => handleOpenModal('privacy')} className="text-black hover:underline text-base md:text-sm transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleOpenModal('terms')} className="text-black hover:underline text-base md:text-sm transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 md:p-8 relative">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl">&times;</button>
            <h2 className="text-2xl font-bold mb-4">
              {modal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h2>
            <div className="text-gray-700 text-sm max-h-[60vh] overflow-y-auto">
              {modal === 'privacy' ? (
                <>
                  <p>Your privacy is important to us. We do not share your information with third parties except as necessary to provide our services. For more details, contact us at Gabrianreedmarketing@icloud.com.</p>
                </>
              ) : (
                <>
                  <p>By using this site, you agree to our terms of service. All content is for informational purposes only and does not constitute a contract. For more details, contact us at Gabrianreedmarketing@icloud.com.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer 