import { useState } from 'react';
import phone1 from '../assets/images/1.png';
import phone2 from '../assets/images/2.png';
import phone3 from '../assets/images/3.png';
import phone5 from '../assets/images/5.png';
import phone6 from '../assets/images/6.png';
import phone7 from '../assets/images/7.png';
import phone8 from '../assets/images/8.png';

// SVG Icon components to replace lucide-react
const Icons = {
  Tag: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
  ),
  Bookmark: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  Share2: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  ),
  Bell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  Camera: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  )
};

interface FeatureCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  onClick: () => void;
  align: 'left' | 'right';
  isActive: boolean;
}

const FeatureCard = ({
  icon: IconComponent,
  title,
  description,
  onClick,
  align,
  isActive
}: FeatureCardProps) => {
  return (
    <button
      className={`group w-full text-left transition-all duration-300 hover:bg-indigo-50 p-6 rounded-xl ${isActive ? 'bg-indigo-50' : ''
        }`}
      onClick={onClick}
    >
      <div className={`flex items-start ${align === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
        <div className={`flex-shrink-0 ${align === 'right' ? 'ml-6' : 'mr-6'}`}>
          <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
            <IconComponent />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-2">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};

const Features = () => {
  const [activeImage, setActiveImage] = useState(phone1);

  // Using our custom SVG icons instead of Lucide React
  const featuresLeft = [
    {
      icon: Icons.Tag,
      title: 'Product Information',
      description: 'Information about new products and offers.',
      image: phone2,
      onClick: () => setActiveImage(phone2)
    },
    {
      icon: Icons.Bookmark,
      title: 'Coupon Management',
      description: 'Reading and saving filtered coupons based on the month.',
      image: phone3,
      onClick: () => setActiveImage(phone3)
    },
    {
      icon: Icons.Share2,
      title: 'Share Lists',
      description: 'Creating and sharing product lists with family members.',
      image: phone7,
      onClick: () => setActiveImage(phone7)
    }
  ];

  const featuresRight = [
    {
      icon: Icons.Bell,
      title: 'Event Notifications',
      description: 'Information about events, holidays and staff schedules.',
      image: phone8,
      onClick: () => setActiveImage(phone8)
    },
    {
      icon: Icons.Search,
      title: 'Contact Search',
      description: 'Search for colleagues contact information by name.',
      image: phone6,
      onClick: () => setActiveImage(phone6)
    },
    {
      icon: Icons.Camera,
      title: 'Product Scanning',
      description: 'Scanning products and checking the details.',
      image: phone5,
      onClick: () => setActiveImage(phone5)
    },
  ];

  return (

    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Explore Our App
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover all the ways Voucher App can simplify your digital wallet experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Features Column */}
          <div className="lg:w-1/3 order-1 lg:order-1 mb-12 lg:mb-0">
            <div className="space-y-6">
              {featuresLeft.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  onClick={feature.onClick}
                  align="right"
                  isActive={activeImage === feature.image}
                />
              ))}
            </div>
          </div>

          {/* Center Phone Image */}
          <div className="lg:w-1/3 order-2 lg:order-2 mb-12 lg:mb-0 px-8">
            <div className="relative">
              {/* Background glow */}
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full w-64 h-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 blur-xl"></div>

              {/* Phone image with consistent dimensions */}
              <div className="relative max-w-xs mx-auto">
                <div className="absolute inset-0 bg-indigo-500 opacity-5 rounded-3xl transform rotate-6"></div>

                <div className="w-64 h-full mx-auto overflow-hidden flex items-center justify-center relative z-10">
                  <img
                    src={activeImage}
                    alt="Voucher App Feature"
                    className="w-full object-contain drop-shadow-2xl transition-all duration-500"
                    style={{
                      height: '500px',
                      objectPosition: 'center top'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Features Column */}
          <div className="lg:w-1/3 order-3 lg:order-3">
            <div className="space-y-6">
              {featuresRight.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  onClick={feature.onClick}
                  align="left"
                  isActive={activeImage === feature.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;