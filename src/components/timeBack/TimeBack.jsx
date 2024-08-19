"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { alice, euphorig, readex_pro } from "@/utils/fonts";
import Lamp from "@/../public/images/lamp/lamp.png";
import centerFlores from "@/../public/images/flores/center.jpg";

const TimeBack = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const eventDate = new Date("2024-10-27");

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = eventDate - now;

      if (timeDiff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);

    updateCountdown();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[65vh]">
      <div className="relative top-0 w-full h-full">
        <Image src={centerFlores} alt="" layout="fill" objectFit="cover" />
        <div className="bg-primary w-full h-full absolute top-0 bg-opacity-80 text-white flex flex-col justify-around px-3">
          <div className="w-32 mx-auto">
            <Image src={Lamp} alt="lamp" />
          </div>
          <p
            className={`${alice.className} text-center text-[15px] font-medium`}
            style={{ fontStyle: "italic" }}
          >
            Assalamu&apos;alaikumu Warahmatullahi Wabarakatuh
          </p>
          <p
            className={`${alice.className} text-center text-[15px] font-medium`}
          >
            Dengan memohon rahmat dan ridho Allah SWT, Kami Mengundang
            Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami
          </p>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center">
              <p className={`${euphorig.className} text-[69px] font-normal`}>
                {countdown.days}
              </p>
              <p className={`${readex_pro.className} text-[19px]`}>Hari</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className={`${euphorig.className} text-[69px] font-normal`}>
                {countdown.hours}
              </p>
              <p className={`${readex_pro.className} text-[19px]`}>Jam</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className={`${euphorig.className} text-[69px] font-normal`}>
                {countdown.minutes}
              </p>
              <p className={`${readex_pro.className} text-[19px]`}>Menit</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className={`${euphorig.className} text-[69px] font-normal`}>
                {countdown.seconds}
              </p>
              <p className={`${readex_pro.className} text-[19px]`}>Detik</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeBack;
