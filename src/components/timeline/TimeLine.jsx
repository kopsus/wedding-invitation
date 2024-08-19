import Image from "next/image";
import React from "react";
import { FaClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import centerFlores from "@/../public/images/flores/center.jpg";
import bgCard from "@/../public/images/flores/left_side.png";
import merakPutih from "@/../public/images/merak/Merak-Putih.png";
import {
  alice,
  poppinsLight,
  poppinsMedium,
  poppinsSemiBold,
  southernaire,
} from "@/utils/fonts";
import Link from "next/link";
import { getTimeline } from "@/api";

export const TimeLine = async () => {
  const data = await getTimeline();

  return (
    <div className="relative h-[1200px]">
      <div className="absolute top-0 w-full h-full">
        <Image src={centerFlores} alt="" />
      </div>
      <div className="bg-primary w-full h-full absolute top-0 bg-opacity-40 px-5 sm:px-10">
        <div className="w-36 mx-auto my-10">
          <Image src={merakPutih} alt="" width={0} height={0} />
        </div>
        {data.map((value, index) => (
          <div
            key={index}
            className="relative h-[450px] shadow-md shadow-black mb-16"
          >
            <div className="absolute top-0 w-full h-full opacity-60">
              <Image src={bgCard} alt="" />
            </div>
            <div className="bg-white absolute top-0 bg-opacity-80 w-full h-full">
              <div className="h-full py-10 px-10 sm:px-20">
                <div className="text-center flex flex-col gap-3 border-b-2 border-primary pb-3">
                  <p
                    className={`${southernaire.className} text-[47px] font-light text-primary`}
                  >
                    {value.judul}
                  </p>
                  <p
                    className={`${poppinsMedium.className} text-[17px] font-medium`}
                  >
                    {value.tanggal}
                  </p>
                </div>
                <div className="flex flex-col mt-10 items-center">
                  <div className="flex items-center gap-2">
                    <FaClock size={24} />
                    <p className={`${poppinsMedium.className} text-base`}>
                      {value.waktu_mulai} WIB - {value.waktu_berakhir} WIB
                    </p>
                  </div>
                  <p
                    className={`${poppinsSemiBold.className} text-lg text-primary mt-5 mb-1`}
                  >
                    {value.tempat}
                  </p>
                  <p
                    className={`${alice.className} text-base font-medium text-center text-[rgb(90, 90, 90)]`}
                  >
                    {value.maps}
                  </p>
                  <Link
                    href={`https://www.google.com/maps/place/${value.maps}`}
                    target="_blank"
                    className="flex items-center gap-2 bg-primary py-2 px-5 mt-5 border-2 text-white rounded-md border-white hover:bg-white hover:text-black hover:border-black transition cursor-pointer"
                  >
                    <IoLocationSharp />
                    <p className={`${poppinsLight.className} text-base`}>
                      Liha Lokasi
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
