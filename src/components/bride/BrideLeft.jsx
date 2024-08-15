import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import bottom_right from "@/assets/image/flores/bottom_right.jpg";
import { southernaire, nightStillComes, alice } from "@/utils/fonts";
import imageMempelaiPria from "@/assets/image/personal/leftBride.png";
import Link from "next/link";
import kupuSmall from "@/assets/image/butterfly/kupu_small.gif";

const BrideLeft = () => {
  const biodataMempelaiPria = [
    {
      namaPanggilan: "Iyan",
      namaLengakp: "Bagus Pratama. M, Sos",
      namaOrtu:
        "Putra Kedua dari Bapak H. Maratua dan Ibu Hj. Yunar Lisma Pohan",
      linkIg: "https://instagram.com",
      potoProfile: imageMempelaiPria,
    },
  ];

  return biodataMempelaiPria.map((value, index) => (
    <div key={index} className="relative w-full h-full">
      <Image src={bottom_right} alt="" width={0} height={0} />
      <div className="absolute top-0 w-full h-full">
        <div className="px-7 pt-5 flex flex-col items-end">
          <p className={`${southernaire.className} text-primary text-6xl`}>
            {value.namaPanggilan}
          </p>
          <div className="mt-3 mb-5 flex flex-col items-end">
            <p
              className={`text-3xl text-(rgba(41,41,41)) ${nightStillComes.className}`}
            >
              {value.namaLengakp}
            </p>
            <p
              className={`${alice.className} text-gray-500 text-lg text-end w-[65%]`}
            >
              {value.namaOrtu}
            </p>
          </div>
          <Link href={value.linkIg} target="_blank">
            <FaInstagram
              color="white"
              size={36}
              className="bg-primary p-1 rounded-full cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-full">
          <Image src={value.potoProfile} alt="" width={0} height={0} />
        </div>
        <div className="overflow-hidden w-48 absolute bottom-72 right-0">
          <Image src={kupuSmall} alt="" width={0} height={0} />
        </div>
      </div>
    </div>
  ));
};

export default BrideLeft;
