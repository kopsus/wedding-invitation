"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// fonts
import { southernaire, quicksand, tms, poppinsMedium } from "@/utils/fonts";

// assets
import { RiMailOpenFill } from "react-icons/ri";
import { fadeInUp, zoomIn } from "@/utils/animation";
import { getCover } from "@/api";

const Banner1 = ({ dataMempelai, params, scrollToContent }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCover();
      setData(res);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % data[0]?.image?.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  const handleClick = () => {
    setShowButton(false);
    scrollToContent();
  };

  return (
    <div className="min-h-screen overflow-hidden flex justify-center items-center relative">
      <div className="overflow-hidden h-screen w-full bg-white">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex justify-center items-center h-full"
          >
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary bg-black"></div>
              <p className="text-primary mt-4">Loading...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={zoomIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 10, ease: "easeOut" }}
            key={currentImageIndex}
            className="relative w-full h-full"
          >
            <Image
              src={data[0].image[currentImageIndex]}
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-1000 ease-out"
            />
          </motion.div>
        )}
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
