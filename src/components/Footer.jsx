import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-6">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <a href="/">
             <img 
               src="/images/Logo2.svg" 
               alt="Your Logo" 
               className="h-10 w-auto"
             />
            </a>
            
          </div>

          {/* Right Side - Email and Social Media */}
          <div className="flex flex-col items-end space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a 
                href="mailto:your-email@example.com" 
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm sm:text-lg"
              >
                your-email@example.com
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-2 sm:p-3 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-4 sm:w-4 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-2 sm:p-3 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-4 sm:w-4 text-[#E1306C]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.438a3.273 3.273 0 100-6.546 3.273 3.273 0 000 6.546zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-2 sm:p-3 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-4 sm:w-4 text-[#1DA1F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/yourpage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-2 sm:p-3 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-4 sm:w-4 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Centered with Increased Top Margin */}
        <div className="text-center text-sm mt-16">
          © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;