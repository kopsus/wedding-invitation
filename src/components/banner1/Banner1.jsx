"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// fonts
import { southernaire, quicksand, tms, poppinsMedium } from "@/utils/fonts";

// assets
import { RiMailOpenFill } from "react-icons/ri";
import imgBanner1 from "@/../public/images/banner/banner1.jpg";
import { fadeInUp } from "@/utils/animation";

const Banner1 = ({ dataMempelai, params, scrollToContent }) => {
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(false);
    scrollToContent();
  };

  return (
    <div className="min-h-screen overflow-hidden flex justify-center items-center relative">
      <div className="overflow-hidden h-screen w-full">
        <Image src={imgBanner1} alt="" width={0} height={0} />
      </div>
      <div className="absolute bottom-5 flex flex-col gap-5 items-center">
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          className={`${southernaire.className} text-primary text-[41px] font-light`}
        >
          {dataMempelai?.nama_panggilan_wanita} &{" "}
          {dataMempelai?.nama_panggilan_pria}
        </motion.p>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          className={`text-white text-[17px] font-medium ${quicksand.className}`}
        >
          Kepada Yth :
        </motion.p>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          className={`${tms.className} text-primary text-[26px] font-semibold`}
        >
          {params ? decodeURIComponent(params.slug) : "Nama Tamu"}
        </motion.p>
        {showButton && (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            whileInView="whileInView"
            transition={{ duration: 1 }}
            onClick={handleClick}
            className="bg-primary py-2 px-5 rounded-md text-white flex items-center gap-2 cursor-pointer"
          >
            <RiMailOpenFill />
            <p className={`${poppinsMedium.className} text-sm`}>
              Bukan Undangan
            </p>
          </motion.div>
        )}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          className={`capitalize text-center text-white text-sm ${quicksand.className}`}
        >
          *Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </motion.p>
      </div>
    </div>
  );
};

export default Banner1;
