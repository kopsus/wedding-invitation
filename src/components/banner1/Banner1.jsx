"use client";

import Image from "next/image";
import { useState } from "react";
import { southernaire, quicksand, tms, poppinsMedium } from "@/utils/fonts";
import imgBanner1 from "@/../public/images/banner/banner1.jpg";
import { RiMailOpenFill } from "react-icons/ri";

const Banner1 = ({ dataMempelai, params, scrollToContent }) => {
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(false);
    scrollToContent();
  };

  return (
    <div className="min-h-screen overflow-hidden flex justify-center items-center relative">
      <div className="overflow-hidden h-screen w-full">
        <Image src={imgBanner1} alt="" width={0} height={0} />
      </div>
      <div className="absolute bottom-5 flex flex-col gap-5 items-center">
        <p
          className={`${southernaire.className} text-primary text-[41px] font-light`}
        >
          {dataMempelai?.nama_panggilan_wanita} &{" "}
          {dataMempelai?.nama_panggilan_pria}
        </p>
        <p
          className={`text-white text-[17px] font-medium ${quicksand.className}`}
        >
          Kepada Yth :
        </p>
        <p
          className={`${tms.className} text-primary text-[26px] font-semibold`}
        >
          {params ? decodeURIComponent(params.slug) : "Nama Tamu"}
        </p>
        {showButton && (
          <div
            onClick={handleClick}
            className="bg-primary py-2 px-5 rounded-md text-white flex items-center gap-2 cursor-pointer"
          >
            <RiMailOpenFill />
            <p className={`${poppinsMedium.className} text-sm`}>
              Bukan Undangan
            </p>
          </div>
        )}
        <p
          className={`capitalize text-center text-white text-sm ${quicksand.className}`}
        >
          *Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>
    </div>
  );
};

export default Banner1;
