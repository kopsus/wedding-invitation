import { alice, southernaire } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { getgallery } from "@/api";
const Gallery = async () => {
  const data = await getgallery();

  return (
    <div className="flex flex-col pt-14 pb-10 bg-[#ededea]">
      <p
        className={`${southernaire.className} text-4xl text-center text-primary font-medium mb-10`}
      >
        Our Gallery
      </p>
      <p
        className={`${alice.className} text-base font-medium w-1/2 mx-auto text-center leading-9`}
      >
        &quot;Loved you yesterday, love you still, always have, always
        will.&quot;
      </p>
      <div className="grid grid-cols-2 gap-3 px-5 mt-9">
        {data.map((value, index) => (
          <div
            key={index}
            className="relative overflow-hidden border-2 border-primary rounded-md sm:h-96 h-52 cursor-pointer group"
          >
            <Image src={value.image} alt="" layout="fill" objectFit="cover" />
            <div className="w-full h-full bg-black/50 absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
