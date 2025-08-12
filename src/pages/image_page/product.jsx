import { useState } from "react";
import Design1 from "../../assets/img/product/1.jpg";
import Design2 from "../../assets/img/product/3.jpg";
import Design3 from "../../assets/img/product/2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Product = () => {
  const images = [Design1, Design2, Design3];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="design" className="p-8 md:p-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-2 row-span-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg/12">
              Product
            </h2>
            <p className="text-gray-700 mb-4 text-shadow-lg/8">
              Focused on capturing high-quality images of products to showcase
              their features, design, and appeal. Its main goal is to present
              items in a way that attracts customers and drives sales—often used
              for e-commerce, catalogs, advertising, and social media.
            </p>
          </div>

          <div onClick={() => openModal(1)} className="cursor-pointer">
            <img
              src={Design2}
              alt="Highlight 2"
              className="w-full h-86 object-cover rounded shadow hover:scale-105 transition"
            />
          </div>

          <div onClick={() => openModal(2)} className="cursor-pointer">
            <img
              src={Design3}
              alt="Highlight 3"
              className="w-full h-86 object-cover rounded shadow hover:scale-105 transition"
            />
          </div>
        </div>

        <div onClick={() => openModal(0)} className="cursor-pointer">
          <img
            src={Design1}
            alt="Highlight 1"
            className="w-full h-full object-cover rounded shadow hover:scale-105 transition"
          />
        </div>
      </div>

      {/* Modal Carousel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Tombol Close */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Tombol Prev */}
          <button
            onClick={prevSlide}
            className="absolute left-5 text-white text-4xl font-bold"
          >
            ‹
          </button>

          {/* Gambar Besar */}
          <img
            src={images[currentIndex]}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
          />

          {/* Tombol Next */}
          <button
            onClick={nextSlide}
            className="absolute right-5 text-white text-4xl font-bold"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};
