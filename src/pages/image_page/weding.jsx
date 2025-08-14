import { useState } from "react";
import Foto1 from "../../assets/img/wedding/1.JPG";
import Foto2 from "../../assets/img/wedding/2.JPG";
import Foto3 from "../../assets/img/wedding/3.JPG";
import Foto4 from "../../assets/img/wedding/4.JPG";
import Foto5 from "../../assets/img/wedding/5.jpg";
import Foto6 from "../../assets/img/wedding/6.jpg";
import Foto7 from "../../assets/img/wedding/7.jpg";
import Foto8 from "../../assets/img/wedding/8.jpg";
import Foto9 from "../../assets/img/wedding/9.jpg";
import Foto10 from "../../assets/img/wedding/0.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Wedding = () => {
  const images = [
    Foto1,
    Foto2,
    Foto3,
    Foto5,
    Foto6,
    Foto7,
    Foto8,
    Foto9,
    Foto10,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openModal = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="food" className="bg-white pb-10">
      {/* Header */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: `url(${Foto4})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Wedding</h2>
          <p className="text-sm md:text-base">
            Captures genuine emotions, timeless moments, and the unique beauty
            of each couple’s love story. Using a blend of candid storytelling
            and artistic portraiture, I create images that feel authentic,
            romantic, and full of heart—so each photograph becomes a piece of
            your wedding day you can relive forever. From the quiet, intimate
            glances to the grand celebrations, every frame is thoughtfully
            composed to preserve memories that will be cherished for a lifetime.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Food ${index + 1}`}
                className="w-full h-64 object-cover rounded shadow cursor-pointer hover:scale-105 transition"
                onClick={() => openModal(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal Preview */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
          <button
            className="absolute top-5 right-5 text-white text-3xl z-50"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="w-full max-w-5xl px-4">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              initialSlide={startIndex}
              loop={true}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Food Large ${idx + 1}`}
                    className="w-full max-h-[80vh] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};
