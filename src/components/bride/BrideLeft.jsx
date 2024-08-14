import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import leftBride from "@/assets/image/personal/leftBride.png";
import bottom_right from "@/assets/image/flores/bottom_right.jpg";

const BrideLeft = () => {
  return (
    <div className="relative top-0 w-full h-full">
      <Image src={bottom_right} alt="" width={0} height={0} />
      <div className="absolute top-0 w-full h-full">
        <div className="px-7 pt-16 flex flex-col items-end">
          <p className="text-primary text-3xl">Nia</p>
          <div className="mt-10 mb-5 flex flex-col items-end">
            <p className="text-3xl text-(rgba(41,41,41))">
              Bagus Pratama. M, Sos
            </p>
            <p className="text-(rgba(111,111,111)) text-end w-3/5">
              Putra Kedua dari Bapak H. Maratua dan Ibu Hj. Yunar Lisma Pohan
            </p>
          </div>
          <FaInstagram
            color="white"
            size={36}
            className="bg-primary p-2 rounded-full"
          />
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <Image src={leftBride} alt="" width={0} height={0} />
      </div>
    </div>
  );
};

export default BrideLeft;
