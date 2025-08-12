import { useState } from "react";

export default function PreviewGambar({ images, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPreview = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closePreview = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Render anak-anak komponen */}
      {children(openPreview)}

      {/* Preview fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={closePreview}
          >
            ✕
          </button>

          <button
            className="absolute left-4 text-white text-4xl"
            onClick={prevImage}
          >
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt="Preview"
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />

          <button
            className="absolute right-4 text-white text-4xl"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
