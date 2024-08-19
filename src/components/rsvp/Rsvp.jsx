"use client";

import React, { useEffect, useState } from "react";
import imageGallery3 from "@/../public/images/person/person3.jpg";
import { CiClock2 } from "react-icons/ci";
import { alice, georgia, hathemBosteem, poppinsLight } from "@/utils/fonts";
import { getRsvp } from "@/api";
import iconHadir from "@/../public/icon/icon_hadir.svg";
import iconRagu from "@/../public/icon/icon_ragu.svg";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import FormAddRsvp from "./FormAddRsvp";

const Rsvp = () => {
  const [dataKehadiran, setDataKehadiran] = useState([]);

  const fetchRsvpData = async () => {
    try {
      const data = await getRsvp();
      setDataKehadiran(data);
    } catch (error) {
      console.error("Gagal mendapatkan data RSVP", error);
    }
  };

  useEffect(() => {
    fetchRsvpData();
  }, []);

  const countKehadiran = (status) =>
    dataKehadiran.filter((item) => item.konfirmasi_kehadiran === status).length;

  return (
    <div
      className="pb-10 min-h-screen bg-fixed bg-contain"
      style={{ backgroundImage: `url(${imageGallery3.src})` }}
    >
      <div className="flex flex-col gap-5 text-center pt-3 pb-10">
        <p
          className={`${georgia.className} text-[32px] font-medium text-primary leading-8`}
        >
          Rsvp
        </p>
        <p
          className={`${hathemBosteem.className} text-[32px] font-semibold text-white leading-8`}
        >
          Ucaparan
        </p>
        <p className={`${alice.className} font-medium leading-6 text-white`}>
          Konfirmasi Kehadiran & Ucapan Selamat
        </p>
      </div>
      <div className="bg-[#eeeeeb] w-[90%] mx-auto rounded-lg">
        <div className="pt-3 border-b border-slate-200">
          <p className="text-center text-primary font-medium">Comment</p>
          <div className="grid grid-cols-3 mx-auto gap-5 w-[80%] text-[#b096a4]">
            <div className="text-center border border-[#b096a4] p-2 rounded-md my-5">
              <p className="text-lg font-bold leading-7">
                {countKehadiran("Hadir")}
              </p>
              <p className={`${poppinsLight.className} text-xs`}>Hadir</p>
            </div>
            <div className="text-center border border-[#b096a4] p-2 rounded-md my-5">
              <p className="text-lg font-bold leading-7">
                {countKehadiran("Tidak Hadir")}
              </p>
              <p className={`${poppinsLight.className} text-xs`}>Tidak Hadir</p>
            </div>
            <div className="text-center border border-[#b096a4] p-2 rounded-md my-5">
              <p className="text-lg font-bold leading-7">
                {countKehadiran("Masih Ragu")}
              </p>
              <p className={`${poppinsLight.className} text-xs`}>Masih Ragu</p>
            </div>
          </div>
        </div>
        <FormAddRsvp onRsvpAdded={fetchRsvpData} />
        <div
          className="max-h-52 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {dataKehadiran.map((value, index) => (
            <div key={index} className="px-10 py-5 border">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm font-bold text-primary">{value.nama}</p>
                <div className="flex items-center gap-2">
                  <p>icon</p>
                  {value.konfirmasi_kehadiran === "Hadir" ? (
                    <Image src={iconHadir} alt="" width={0} height={0} />
                  ) : value.konfirmasi_kehadiran === "Masih Ragu" ? (
                    <Image src={iconRagu} alt="" width={0} height={0} />
                  ) : (
                    <MdCancel color="red" />
                  )}
                </div>
              </div>
              <p className="text-sm">{value.ucapan}</p>
              <div className="flex items-center gap-1 text-[11px] text-primary mt-1">
                <CiClock2 size={14} />
                <p>Baru saja</p>
                <p className="font-bold cursor-pointer">Replay</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
