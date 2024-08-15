import Image from "next/image";
import React from "react";
import { FaClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import centerFlores from "@/assets/image/flores/center.jpg";
import bgCard from "@/assets/image/flores/left_side.png";
import {
  alice,
  poppinsLight,
  poppinsMedium,
  poppinsSemiBold,
  southernaire,
} from "@/utils/fonts";

export const TimeLine = () => {
  const akadNikah = [
    {
      id: "1",
      title: "Akad Nikah",
      date: "Minggu,22 Agustus 2024",
      timeStart: "09:00",
      timeEnd: "10:00",
      place: " AULA MASJID AL-NIZAM",
      maps: "Jl.Rawasari Timur No.04, RT.16 / RW.02 Cempaka Putih Timur, Cempaka Putih",
    },
    {
      id: "2",
      title: "Resepsi Nikah",
      date: "Minggu,22 Agustus 2024",
      timeStart: "09:00",
      timeEnd: "10:00",
      place: " AULA MASJID AL-NIZAM",
      maps: "Jl.Rawasari Timur No.04, RT.16 / RW.02 Cempaka Putih Timur, Cempaka Putih",
    },
  ];

  return (
    <div className="relative h-[1200px]">
      <div className="absolute top-0 w-full h-full">
        <Image src={centerFlores} alt="" />
      </div>
      <div className="bg-primary w-full h-full absolute top-0 bg-opacity-40 px-5 sm:px-10 pt-40">
        {akadNikah.map((value, index) => (
          <div
            key={index}
            className="relative h-[450px] shadow-md shadow-black mb-20"
          >
            <div className="absolute top-0 w-full h-full opacity-60">
              <Image src={bgCard} alt="" />
            </div>
            <div className="bg-white absolute top-0 bg-opacity-80 w-full h-full">
              <div className="h-full py-10 px-10 sm:px-20">
                <div className="text-center flex flex-col gap-3 border-b-2 border-primary pb-3">
                  <p
                    className={`${southernaire.className} text-5xl text-primary`}
                  >
                    Akad Nikah
                  </p>
                  <p
                    className={`${poppinsMedium.className} text-base font-medium`}
                  >
                    Minggu,22 Agustus 2024
                  </p>
                </div>
                <div className="flex flex-col mt-10 items-center">
                  <div className="flex items-center gap-2">
                    <FaClock size={24} />
                    <p className={`${poppinsMedium.className} text-base`}>
                      09:00 WIB - 10:00 WIB
                    </p>
                  </div>
                  <p
                    className={`${poppinsSemiBold.className} text-lg text-primary mt-5 mb-1`}
                  >
                    AULA MASJID AL-NIZAM
                  </p>
                  <p
                    className={`${alice.className} text-lg text-center text-[rgb(90, 90, 90)]`}
                  >
                    Jl.Rawasari Timur No.04, RT.16 / RW.02 Cempaka Putih Timur,
                    Cempaka Putih
                  </p>
                  <div className="flex items-center gap-2 bg-primary py-2 px-5 mt-5 border-2 text-white border-white hover:bg-white hover:text-black hover:border-black transition cursor-pointer">
                    <IoLocationSharp />
                    <p className={`${poppinsLight.className} text-base`}>
                      Liha Lokasi
                    </p>
                  </div>
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
