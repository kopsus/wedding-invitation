import Image from "next/image";
import React from "react";

// assets
import bottom_right from "@/../public/images/flores/bottom_right.jpg";
import kupuSmall from "@/../public/images/butterfly/kupu_small.gif";
import { BrideProfilePria } from "./BrideProfile";

const BrideLeft = ({ dataMempelai }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-bottom relative bg-red-400"
      style={{ backgroundImage: `url(${bottom_right.src})` }}
    >
      <div className="px-7 pt-5 flex flex-col items-end">
        <BrideProfilePria dataMempelai={dataMempelai} />
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
