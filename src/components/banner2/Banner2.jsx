import Image from "next/image";
import React from "react";
import imgBanner2 from "@/assets/image/banner/Banner2.jpg";
import { nightStillComes, southernaire } from "@/utils/fonts";

const Banner2 = () => {
  return (
    <div className="max-h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={imgBanner2} alt="banner 2" className="" />
      <div className="absolute right-24 bottom-44 text-primary">
        <p className={`${southernaire.className} text-5xl`}>Nia & Iyan</p>
        <p className={`${nightStillComes.className} text-xl`}>
          Minggu, 27 Okt 2024
        </p>
      </div>
    </div>
  );
};

export default Banner2;
