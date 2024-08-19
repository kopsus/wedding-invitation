import Image from "next/image";
import React from "react";
import imgBanner2 from "@/../public/images/banner/banner2.jpg";
import { nightStillComes, southernaire } from "@/utils/fonts";
import { formatDate } from "@/utils/format";

const Banner2 = ({ dataMempelai }) => {
  console.log("data mempelai", dataMempelai.timeline);

  return (
    <div className="max-h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={imgBanner2} alt="banner 2" className="" />
      <div className="absolute right-24 bottom-44 text-primary">
        <p className={`${southernaire.className} text-[45px] font-medium`}>
          {dataMempelai.nama_panggilan_wanita} &{" "}
          {dataMempelai.nama_panggilan_pria}
        </p>
        <p className={`${nightStillComes.className} text-[19px] font-medium`}>
          {formatDate(dataMempelai.timeline)}
        </p>
      </div>
    </div>
  );
};

export default Banner2;
