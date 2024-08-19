import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { southernaire, nightStillComes, alice } from "@/utils/fonts";
import bottom_right from "@/../public/images/flores/bottom_right.jpg";
import imageMempelaiPria from "@/../public/images/personal/leftBride.png";
import kupuSmall from "@/../public/images/butterfly/kupu_small.gif";

const BrideLeft = ({ dataMempelai }) => {
  return (
    <div className="relative w-full h-full">
      <Image src={bottom_right} alt="" width={0} height={0} />
      <div className="absolute top-10 w-full h-full">
        <div className="px-7 pt-5 flex flex-col items-end">
          <p
            className={`${southernaire.className} text-primary text-6xl font-medium`}
          >
            {dataMempelai.nama_panggilan_pria}
          </p>
          <div className="mt-3 mb-5 flex flex-col items-end">
            <p
              className={`text-[35px] font-medium text-(rgba(41,41,41)) ${nightStillComes.className}`}
            >
              {dataMempelai.nama_lengkap_pria}
            </p>
            <p
              className={`${alice.className} text-gray-500 text-[17px] text-end font-medium w-[65%]`}
            >
              {dataMempelai.nama_orang_tua_pria}
            </p>
          </div>
          <Link href={dataMempelai.instagram_pria} target="_blank">
            <FaInstagram
              color="white"
              size={28}
              className="bg-primary p-1 rounded-full cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-full">
          <Image src={imageMempelaiPria} alt="" width={0} height={0} />
        </div>
        <div className="overflow-hidden w-48 absolute bottom-64 left-20">
          <Image src={kupuSmall} alt="" width={0} height={0} />
        </div>
      </div>
    </div>
  );
};

export default BrideLeft;
