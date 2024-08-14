import Image from "next/image";
import React from "react";
import Lamp from "@/assets/image/lamp/lamp.png";
import centerFlores from "@/assets/image/flores/center.jpg";
import { quicksand } from "@/assets/fonts";

const TimeBack = () => {
  return (
    <div className="h-[65vh]">
      <div className="relative top-0 w-full h-full">
        <Image src={centerFlores} alt="" />
        <div className="bg-primary w-full h-full absolute top-0 bg-opacity-80 text-white flex flex-col justify-around">
          <div className="w-32 mx-auto">
            <Image src={Lamp} alt="lamp" />
          </div>
          <p className="text-center italic">
            Assalamu&apos;alaikumu Warahmatullahi Wabarakatuh
          </p>
          <p className="text-center text-sm">
            Dengan memohon rahmat dan ridho Allah SWT, Kami Mengundang
            Bapak/Ibu/Saudara/i, untuk menghindari acara pernikahan kami
          </p>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center">
              <p className="text-7xl">00</p>
              <p className="text-xl">Hari</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-7xl">00</p>
              <p className="text-xl">Jam</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-7xl">00</p>
              <p className="text-xl">Menit</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-7xl">00</p>
              <p className="text-xl">Detik</p>
            </div>
          </div>
        </div>
      </div>
      {/* <p>asu</p> */}
    </div>
    // <div
    //   className={`${quicksand.className} min-h-[65vh] bg-[rgba(129,62,62)] flex flex-col justify-around text-white`}
    // >
    //   <Image src={Lamp} alt="lamp" className="w-32 block mx-auto" />
    //   <p className="text-center italic">
    //     Assalamu&apos;alaikumu Warahmatullahi Wabarakatuh
    //   </p>
    //   <p className="text-center text-sm">
    //     Dengan memohon rahmat dan ridho Allah SWT, Kami Mengundang
    //     Bapak/Ibu/Saudara/i, untuk menghindari acara pernikahan kami
    //   </p>
    //   <div className="flex justify-around">
    //     <div className="flex flex-col justify-center items-center">
    //       <p className="text-7xl">00</p>
    //       <p className="text-xl">Hari</p>
    //     </div>
    //     <div className="flex flex-col justify-center items-center">
    //       <p className="text-7xl">00</p>
    //       <p className="text-xl">Jam</p>
    //     </div>
    //     <div className="flex flex-col justify-center items-center">
    //       <p className="text-7xl">00</p>
    //       <p className="text-xl">Menit</p>
    //     </div>
    //     <div className="flex flex-col justify-center items-center">
    //       <p className="text-7xl">00</p>
    //       <p className="text-xl">Detik</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TimeBack;
