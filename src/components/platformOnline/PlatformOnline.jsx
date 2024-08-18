import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsMagic } from "react-icons/bs";
import floreLeftSide from "@/assets/image/flores/left_side.png";
import floreRighttSide from "@/assets/image/flores/right_side.png";
import { alice, quicksand, southernaire } from "@/utils/fonts";
import butterFly from "@/assets/image/butterfly/kupu_big.gif";

const PlatformOnline = () => {
  return (
    <>
      <div className="bg-[#ededea] py-10 px-7 relative">
        <div className="absolute left-0 top-14 w-24 z-10">
          <Image src={floreLeftSide} alt="" width={0} height={0} />
        </div>
        <div className="flex flex-col gap-10 items-end text-end z-50 relative">
          <p
            className={`${southernaire.className} text-[55px] font-medium text-primary`}
          >
            Wedding Live
          </p>
          <p className={`${alice.className} font-medium`}>
            Bagi bapak/Ibu yang berhalanga hadir bisa mengikut acara pernikahan
            kami secara virtual
          </p>
          <div className="flex items-center bg-primary gap-2 py-2 px-5 rounded-md text-white shadow-md">
            <FaInstagram />
            <p className={`${quicksand.className} font-medium`}>
              Live Instagram
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#ededea] py-10 px-7 relative">
        <div className="absolute right-0 top-14 w-24 z-10">
          <Image src={floreRighttSide} alt="" width={0} height={0} />
        </div>
        <div className="flex flex-col gap-10 items-start z-50 relative">
          <div className="flex gap-10 items-center">
            <p
              className={`${southernaire.className} text-[55px] font-medium text-primary`}
            >
              Filter Instagram
            </p>
            <div className="h-8 overflow-hidden">
              <Image src={butterFly} alt="" width={0} height={0} />
            </div>
          </div>
          <p className={`${alice.className} font-medium`}>
            Mari bantu kami mengabadikan momen spesial ini dengan cara
            menggunakan filter Instagram yang telah kami sediakan
          </p>
          <div className="flex items-center bg-primary gap-2 py-2 px-5 rounded-md text-white shadow-md">
            <BsMagic />
            <p className={`${quicksand.className} font-medium`}>
              Filter Instagram
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformOnline;
