"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGift } from "react-icons/fa";
import { alice, poppinsMedium, quicksand, southernaire } from "@/utils/fonts";
import Prince from "@/../public/images/Prince.png";
import imageGallery1 from "@/../public/images/person/person1.jpg";
import imageGallery2 from "@/../public/images/person/person2.jpg";
import imageGallery3 from "@/../public/images/person/person3.jpg";
import imageGallery4 from "@/../public/images/person/person5.jpg";
import imageGallery5 from "@/../public/images/person/person6.jpg";
import imageGallery6 from "@/../public/images/person/person7.jpg";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Gift = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!open);
  };

  return (
    <div
      className="relative bg-[#ecece9] pt-5"
      style={{ backgroundImage: `url(${Prince.src})` }}
    >
      <div className="border-2 border-primary flex flex-col items-center gap-14 pt-14 pb-10 bg-[#ededea]">
        <p
          className={`${southernaire.className} text-[28px] font-medium text-primary`}
        >
          Wedding Gift
        </p>
        <p
          className={`${alice.className} font-medium text-[#202020] text-center`}
        >
          Doa restu merupakan karunia yang sangat berarti bagi kami, dan jika
          memberi adalah ungkapan tanda kasih anda, ando dapat memberi kado
          secara cashless.
        </p>
        <div className="flex flex-col gap-5 items-center">
          <p
            className={`${poppinsMedium.className} text-[15px] text-[#786958]`}
          >
            Klik wedding gift
          </p>
          <div
            className="flex items-center gap-2 text-white bg-primary rounded-md px-5 py-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaGift />
            <p className={`${quicksand.className} text-[15px] font-medium`}>
              Wedding Gift
            </p>
          </div>
          {isOpen && <div className="h-52 w-52 border-2 border-primary"></div>}
        </div>
      </div>
      <Swiper
        className="mySwiper mt-10"
        slidesPerView={4}
        spaceBetween={5}
        autoplay={true}
        loop={true}
      >
        <SwiperSlide>
          <div className="h-28 overflow-hidden border-2 border-white rounded-md">
            <Image src={imageGallery1} alt="" width={0} height={0} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-28 overflow-hidden border-2 border-white rounded-md">
            <Image src={imageGallery2} alt="" width={0} height={0} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-28 overflow-hidden border-2 border-white rounded-md">
            <Image src={imageGallery3} alt="" width={0} height={0} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-28 overflow-hidden border-2 border-white rounded-md">
            <Image src={imageGallery4} alt="" width={0} height={0} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-28 overflow-hidden border-2 border-white rounded-md">
            <Image src={imageGallery5} alt="" width={0} height={0} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-28 overflow-hidden border-2 border-white rounded-md">
            <Image src={imageGallery6} alt="" width={0} height={0} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gift;
