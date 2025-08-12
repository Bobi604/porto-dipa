import { useState } from "react";
import Foto1 from "../../assets/img/wedding/1.JPG";
import Foto2 from "../../assets/img/wedding/2.JPG";
import Foto3 from "../../assets/img/wedding/3.JPG";
import Foto4 from "../../assets/img/wedding/4.JPG";

export const Wedding = () => {
  const images = [Foto1, Foto2, Foto3, Foto4];
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
    <section id="wedding" className="p-8 md:p-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wedding</h2>
          <p className="text-gray-700 mb-4">
            Captures genuine emotions, timeless moments, and the unique beauty
            of each couple’s love story. Using a blend of candid storytelling
            and artistic portraiture, I create images that feel authentic,
            romantic, and full of heart.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Wedding ${idx + 1}`}
              onClick={() => openPreview(idx)}
              className="w-full h-48 sm:h-64 object-cover rounded shadow cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Preview */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={closePreview}
          >
            ✕
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 text-white text-4xl"
            onClick={prevImage}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="Preview"
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />

          {/* Next Button */}
          <button
            className="absolute right-4 text-white text-4xl"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};
