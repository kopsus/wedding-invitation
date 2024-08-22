"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// font
import { alice, southernaire } from "@/utils/fonts";
import { fadeInUp } from "@/utils/animation";
import { NextLightbox } from "../lightbox/Lightbox";
import { useLightbox } from "../lightbox/useLightbox";

const Gallery = ({ dataGallery }) => {
  const lightbox = useLightbox();

  const zoomIn = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  };

  return (
    <>
      <div className="flex flex-col pt-14 pb-10 bg-[#ededea]">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${southernaire.className} text-4xl text-center text-primary font-medium mb-10`}
        >
          Our Gallery
        </motion.p>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${alice.className} text-base font-medium w-1/2 mx-auto text-center leading-9`}
        >
          &quot;Loved you yesterday, love you still, always have, always
          will.&quot;
        </motion.p>
        <motion.div className="grid grid-cols-2 gap-3 px-5 mt-9">
          {dataGallery.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() =>
                lightbox.open(
                  index,
                  dataGallery?.map((d) => d?.image)
                )
              }
              className="relative overflow-hidden border-2 border-primary rounded-md sm:h-96 h-52 cursor-pointer group"
            >
              <motion.div
                className="w-full h-full"
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={value.image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>{" "}
              <div className="w-full h-full bg-black/50 absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <NextLightbox
        index={lightbox.index}
        visible={lightbox.visible}
        slides={lightbox.slides}
        onClose={lightbox.close}
      />
    </>
  );
};

export default Gallery;
