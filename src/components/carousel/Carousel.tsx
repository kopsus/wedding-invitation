import { typeGallery } from "@/api/types";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = ({ dataGallery }: { dataGallery: typeGallery[] }) => {
  return (
    <Swiper
      className="mySwiper mt-10"
      slidesPerView={4}
      spaceBetween={5}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {dataGallery.map((value, index) => (
        <SwiperSlide key={index}>
          <div className="h-28 overflow-hidden border-2 border-white rounded-md cursor-pointer">
            <Image src={value.image} alt="" layout="fill" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
