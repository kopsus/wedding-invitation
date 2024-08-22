"use client";

import { fadeIn, fadeInUp } from "@/utils/animation";
import { alice, nightStillComes, southernaire } from "@/utils/fonts";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export const BrideProfileWanita = ({ dataMempelai }) => {
  return (
    <>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`${southernaire.className} text-primary text-6xl font-medium`}
      >
        {dataMempelai.nama_panggilan_wanita}
      </motion.p>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-3 mb-5 flex flex-col"
      >
        <p
          className={`text-[35px] font-medium text-(rgba(41,41,41)) ${nightStillComes.className}`}
        >
          {dataMempelai.nama_lengkap_Wanita}
        </p>
        <p
          className={`${alice.className} text-gray-500 text-[17px] font-medium w-[65%]`}
        >
          {dataMempelai.nama_orang_tua_wanita}
        </p>
      </motion.div>
      <motion.a
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        href={dataMempelai.instagram_wanita}
        target="_blank"
      >
        <FaInstagram
          color="white"
          size={28}
          className="bg-primary p-1 rounded-full cursor-pointer"
        />
      </motion.a>
    </>
  );
};

export const BrideProfilePria = ({ dataMempelai }) => {
  return (
    <>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`${southernaire.className} text-primary text-6xl font-medium`}
      >
        {dataMempelai.nama_panggilan_pria}
      </motion.p>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-3 mb-5 flex flex-col items-end"
      >
        <p
          className={`text-[35px] font-medium text-(rgba(41,41,41)) ${nightStillComes.className}`}
        >
          {dataMempelai.nama_lengkap_pria}
        </p>
        <p
          className={`${alice.className} text-gray-500 text-[17px] text-end font-medium w-[65%]`}
        >
          {dataMempelai.nama_orang_tua_pria}
        </p>
      </motion.div>
      <motion.a
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        href={dataMempelai.instagram_pria}
        target="_blank"
      >
        <FaInstagram
          color="white"
          size={28}
          className="bg-primary p-1 rounded-full cursor-pointer"
        />
      </motion.a>
    </>
  );
};
