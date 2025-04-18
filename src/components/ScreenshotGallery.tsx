interface ScreenshotGalleryProps {
  screenshots: string[];
  selectedImage: string | null;
  onSelectImage: (image: string) => void;
}


const ScreenshotGallery = ({
  screenshots,
  selectedImage,
  onSelectImage
}: ScreenshotGalleryProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {screenshots.map((screenshot, index) => (
        <div
          key={index}
          className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedImage === screenshot ? 'ring-4 ring-indigo-500 rounded-xl' : ''
            }`}
          onClick={() => onSelectImage(screenshot)}
        >
          <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-sm transition-shadow">
            <div className="relative overflow-hidden rounded-lg bg-indigo-50">
              <div className="aspect-[9/16] w-full"> {/* Standard Tailwind aspect ratio */}
                <img
                  src={screenshot}
                  alt={`App Screenshot ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy" // Add lazy loading
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScreenshotGallery;