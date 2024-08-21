"use client";

import React, { useEffect, useState, useRef } from "react";
import { getLove, getRsvp } from "../../api";

// font
import { alice, georgia, hathemBosteem, poppinsLight } from "../../utils/fonts";

// assets
import imageGallery3 from "@/../public/images/person/person1.jpg";
import FormAddRsvp from "./FormAddRsvp";
import { CommentItem } from "./CommentItem";

const Rsvp = () => {
  const formRef = useRef(null);
  const [dataLove, setDataLove] = useState([]);
  const [dataKehadiran, setDataKehadiran] = useState([]);

  const fetchRsvpData = async () => {
    try {
      const data = await getRsvp();

      setDataKehadiran(data);
    } catch (error) {
      console.error("Gagal mendapatkan data RSVP", error);
    }
  };

  const fetcLoveData = async () => {
    const data = await getLove();
    setDataLove(data);
  };

  const onClickReply = (id) => {
    formRef.current?.selectForReply?.(id);
  };

  useEffect(() => {
    fetchRsvpData();
    fetcLoveData();
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
        <div className="pt-3  border-b border-slate-200">
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
        <FormAddRsvp ref={formRef} onRsvpAdded={fetchRsvpData} />
        <div
          className="max-h-52 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {dataKehadiran.map((value, index) => (
            <CommentItem
              onClickReply={onClickReply}
              value={value}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
