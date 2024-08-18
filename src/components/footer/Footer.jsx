import Image from "next/image";
import React from "react";
import imgPerson from "@/assets/image/person/person2.jpg";
import imgMerak from "@/assets/image/merak/merak-footer.png";
import {
  alice,
  nightStillComes,
  poppinsSemiBold,
  southernaire,
} from "@/utils/fonts";
import { IoMdBasketball } from "react-icons/io";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="h-96 relative ">
        <Image src={imgPerson} alt="" width={0} height={0} />
        <div className="absolute bg-gradient-to-t from-white h-1/6 bottom-0 w-full"></div>
      </div>
      <div className="bg-[#ededea] text-center">
        <p
          className={`${alice.className} text-[15px] font-medium leading-[23px] text-center px-5`}
        >
          &quot;Dan diantara tanda-tanda(Kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menajdikan di antaramu rasa
          kasih dan sayang. Sunggu, pada yang demikina itu benar-benar terdapat
          tanda-tanda (Kebesaran Allah) bagi kamu yang berpiki.&quot; (Ar-Rum
          21)
        </p>
        <div className="flex flex-col gap-5 my-10 items-center">
          <p
            className={`${nightStillComes.className} text-lg font-medium leading-[18px]`}
          >
            Terimakasih
          </p>
          <p className={`${alice.className} text-[15px]`}>
            Wassalamualaikum Wr. Wb
          </p>
        </div>
        <p
          className={`${southernaire.className} text-[55px] leading-6 text-primary`}
        >
          Kami Yang Berbahagia
        </p>
        <p className={`${alice.className} py-10`}>
          Kedua Mempelai & Keluagra Besa
        </p>
      </div>
      <div className="bg-[#ededea]">
        <Image src={imgMerak} alt="" width={0} height={0} />
      </div>
      <div className="bg-[#ededea] w-full py-5">
        <p className={`${poppinsSemiBold.className} text-center mb-5`}>
          Design By Website Invitation
        </p>
        <div className="flex justify-center gap-5">
          <FaWhatsapp size={32} className="bg-slate-100 rounded-full p-1" />
          <IoMdBasketball size={32} className="bg-slate-100 rounded-full p-1" />
          <FaInstagram size={32} className="bg-slate-100 rounded-full p-1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
