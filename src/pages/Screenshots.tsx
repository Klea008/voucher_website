import { useState } from 'react';
import photo2 from '../assets/images/screens/2.png';
import photo3 from '../assets/images/screens/3.png';
import photo4 from '../assets/images/screens/4.png';
import photo5 from '../assets/images/screens/5.png';
import photo6 from '../assets/images/screens/6.png';
import photo7 from '../assets/images/screens/7.png';
import photo8 from '../assets/images/screens/8.png';
import photo9 from '../assets/images/screens/9.png';
import photo10 from '../assets/images/screens/10.png';
import photo11 from '../assets/images/screens/11.png';
import photo12 from '../assets/images/screens/12.png';


import ScreenshotGallery from '../components/ScreenshotGallery';

const Screenshots = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const screenshots = [
    photo2, photo3, photo4, photo5, photo6, photo7, photo8,
    photo9, photo10, photo11, photo12
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Visual Experience
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">UI Screenshots</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the sleek design and intuitive interface of the Voucher App
          </p>
        </div>

        <ScreenshotGallery
          screenshots={screenshots}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}  // This works because the type is now compatible
        />

        {/* Modal for enlarged view with improved sizing */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-h-full max-w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white p-2 md:p-3 rounded-2xl shadow-2xl max-h-full overflow-hidden">
                <div className="max-h-screen overflow-auto" style={{ maxHeight: 'calc(100vh - 6rem)' }}>
                  <img
                    src={selectedImage}
                    alt="App Screenshot"
                    className="w-auto h-auto object-contain max-h-full rounded-lg"
                    style={{ maxHeight: 'calc(100vh - 8rem)', maxWidth: '90vw' }}
                  />
                </div>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Screenshots;