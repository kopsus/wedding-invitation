import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// fonts
import { alice, quicksand, southernaire } from "@/utils/fonts";

// assets
import { FaInstagram } from "react-icons/fa";
import { BsMagic } from "react-icons/bs";
import floreLeftSide from "@/../public/images/flores/left_side.png";
import floreRighttSide from "@/../public/images/flores/right_side.png";
import butterFly from "@/../public/images/butterfly/kupu_big.gif";
import { fadeInUp } from "@/utils/animation";

const PlatformOnline = () => {
  return (
    <>
      <div className="bg-[#ededea] py-10 px-7 relative">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-14 w-24 z-10"
        >
          <Image src={floreLeftSide} alt="" width={0} height={0} />
        </motion.div>
        <div className="flex flex-col gap-10 items-end text-end z-50 relative">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${southernaire.className} text-[55px] font-medium text-primary`}
          >
            Wedding Live
          </motion.p>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${alice.className} font-medium`}
          >
            Bagi bapak/Ibu yang berhalanga hadir bisa mengikut acara pernikahan
            kami secara virtual
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center bg-primary gap-2 py-2 px-5 rounded-md text-white shadow-md"
          >
            <FaInstagram />
            <p className={`${quicksand.className} font-medium`}>
              Live Instagram
            </p>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#ededea] py-10 px-7 relative">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute right-0 top-14 w-24 z-10"
        >
          <Image src={floreRighttSide} alt="" width={0} height={0} />
        </motion.div>
        <div className="flex flex-col gap-10 items-start z-50 relative">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-10 items-center"
          >
            <p
              className={`${southernaire.className} text-[55px] font-medium text-primary`}
            >
              Filter Instagram
            </p>
            <div className="h-8 overflow-hidden">
              <Image src={butterFly} alt="" width={0} height={0} />
            </div>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${alice.className} font-medium`}
          >
            Mari bantu kami mengabadikan momen spesial ini dengan cara
            menggunakan filter Instagram yang telah kami sediakan
          </motion.p>
          <div className="flex items-center bg-primary gap-2 py-2 px-5 rounded-md text-white shadow-md">
            <BsMagic />
            <p className={`${quicksand.className} font-medium`}>
              Filter Instagram
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformOnline;
