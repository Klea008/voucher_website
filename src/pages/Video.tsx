import React from 'react';
import demoVideo from '../videos/demo.mp4';

const Video = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Video</h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <video
            controls
            autoPlay
            muted
            className="w-full"
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;