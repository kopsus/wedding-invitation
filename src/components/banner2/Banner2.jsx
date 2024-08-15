import Image from "next/image";
import React from "react";
import imgBanner2 from "@/assets/image/banner/Banner2.jpg";
import { nightStillComes, southernaire } from "@/utils/fonts";
import { namaMempelai } from "@/utils";

const Banner2 = () => {
  const AcaraHajatan = ["Minggu, 27 Okt 2024"];

  return (
    <div className="max-h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={imgBanner2} alt="banner 2" className="" />
      <div className="absolute right-24 bottom-44 text-primary">
        {namaMempelai.map((value, index) => (
          <p key={index} className={`${southernaire.className} text-5xl`}>
            {value.woman} & {value.man}
          </p>
        ))}
        {AcaraHajatan.map((value, index) => (
          <p
            key={index}
            className={`${nightStillComes.className} text-xl font-medium`}
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Banner2;
