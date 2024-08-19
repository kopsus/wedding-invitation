import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { southernaire, nightStillComes, alice } from "@/utils/fonts";
import bottom_right from "@/../public/images/flores/bottom_right.jpg";
import kupuSmall from "@/../public/images/butterfly/kupu_small.gif";

const BrideLeft = ({ dataMempelai }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-bottom relative bg-red-400"
      style={{ backgroundImage: `url(${bottom_right.src})` }}
    >
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
      <div className="w-full h-full relative overflow-hidden">
        <Image src={dataMempelai.foto_pria} alt="" width={1080} height={1080} />
      </div>
      <div className="overflow-hidden w-48 absolute bottom-64 right-0">
        <Image src={kupuSmall} alt="" width={0} height={0} />
      </div>
    </div>
  );
};

export default BrideLeft;
