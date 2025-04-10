import { useState, useEffect } from 'react';
import phone1 from '../assets/images/1.png';
import phone2 from '../assets/images/2.png';
import phone3 from '../assets/images/3.png'; // Added import for the third image

const Home = () => {
  const phoneImages = [phone1, phone2, phone3]; // Array of all phone images
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activePhoneImage = phoneImages[activeImageIndex];

  // Auto-switch between phone images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex(prev => (prev + 1) % phoneImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-100 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Left content section */}
          <div className="md:w-1/2 mb-16 md:mb-0 md:pr-12">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Your Wallet, Reimagined
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-indigo-600">Voucher</span> App
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Choose us for a more organized digital wallet and a step towards
              a sustainable future without paper waste.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center">
                <div className="mr-3 bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Easy to use</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3 bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Eco-friendly</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3 bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Secure storage</span>
              </div>
            </div>
          </div>

          {/* Right phone image section */}
          <div className="md:w-1/2 relative">
            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full w-80 h-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 blur-xl"></div>

            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-indigo-500 opacity-5 rounded-3xl transform rotate-6"></div>

              {/* Phone image wrapper with fixed dimensions */}
              <div className="relative z-10 transform transition-all duration-500 hover:scale-105">
                <div className="w-64 h-full mx-auto overflow-hidden flex items-center justify-center">
                  <img
                    src={activePhoneImage}
                    alt="Voucher App"
                    className="w-full object-contain drop-shadow-2xl"
                    style={{
                      height: '500px',
                      objectPosition: 'center top'
                    }}
                  />
                </div>

                {/* Image switcher buttons - now with three buttons */}
                <div className="flex justify-center mt-6 space-x-3">
                  {phoneImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${activeImageIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
                      aria-label={`View phone image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;