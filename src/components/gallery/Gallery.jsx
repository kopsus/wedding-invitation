import { alice, southernaire } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import imageGallery1 from "@/../public/images/person/person1.jpg";
import imageGallery2 from "@/../public/images/person/person2.jpg";
import imageGallery3 from "@/../public/images/person/person3.jpg";
import imageGallery4 from "@/../public/images/person/person5.jpg";
import imageGallery5 from "@/../public/images/person/person6.jpg";
import imageGallery6 from "@/../public/images/person/person7.jpg";
const Gallery = () => {
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
        <div className="overflow-hidden border-2 border-primary rounded-md h-96">
          <Image src={imageGallery1} alt="" width={0} height={0} />
        </div>
        <div className="overflow-hidden border-2 border-primary rounded-md h-96">
          <Image src={imageGallery2} alt="" width={0} height={0} />
        </div>
        <div className="overflow-hidden border-2 border-primary rounded-md h-96">
          <Image src={imageGallery3} alt="" width={0} height={0} />
        </div>
        <div className="overflow-hidden border-2 border-primary rounded-md h-96">
          <Image src={imageGallery4} alt="" width={0} height={0} />
        </div>
        <div className="overflow-hidden border-2 border-primary rounded-md h-96">
          <Image src={imageGallery5} alt="" width={0} height={0} />
        </div>
        <div className="overflow-hidden border-2 border-primary rounded-md h-96">
          <Image src={imageGallery6} alt="" width={0} height={0} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
