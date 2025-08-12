import { useState } from "react";
import Coffe from "../../assets/img/food/1.jpg";
import Ayam from "../../assets/img/food/4.jpg";
import Paket from "../../assets/img/food/3.jpg";
import Nasi from "../../assets/img/food/2.jpg";
import Kambiing from "../../assets/img/food/5.jpg";
import F1 from "../../assets/img/food/6.JPG";
import F2 from "../../assets/img/food/7.jpg";
import F3 from "../../assets/img/food/8.jpg";
import F4 from "../../assets/img/food/9.jpg";
import F5 from "../../assets/img/food/0.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Food = () => {
  const images = [Ayam, Paket, Nasi, Kambiing, F1, F2, F3, F4, F5];

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
          backgroundImage: `url(${Coffe})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Food & Beverage
          </h2>
          <p className="text-sm md:text-base">
            My food and beverage photography captures dishes and drinks at their
            most mouthwatering moments—showcasing rich colors, tempting
            textures, and perfect plating. Every shot is crafted with careful
            lighting and composition to make flavors almost leap off the image.
            Whether it’s the steam rising from a fresh meal, the sparkle of a
            chilled cocktail, or the intricate details of a garnish, each photo
            invites viewers to taste with their eyes first.
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
