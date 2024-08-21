"use client";

import Image from "next/image";
import { AccordianItem, Accordian } from "./AccordionItem";
import { getLove, getStory } from "../../api";
import { motion } from "framer-motion";

// fonts
import { cormorant, poppinsMedium, southernaire } from "../../utils/fonts";

// assets
import butterFly from "@/../public/images/butterfly/kupu_big.gif";
import floreBottomRight from "@/../public/images/flores/bottom_right.jpg";
import { useEffect, useState } from "react";
import { fadeInUp } from "../../utils/animation";

const Story = () => {
  const [dataStory, setDataStory] = useState([]);
  const [dataLove, setDataLove] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const story = await getStory();
      const love = await getLove();
      setDataStory(story);
      setDataLove(love);
    };

    fetchData();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-bottom-right px-5 pb-5"
      style={{
        backgroundImage: `url(${floreBottomRight.src})`,
      }}
    >
      <div className="border-2 border-primary">
        {dataLove.map((value, index) => (
          <div
            key={index}
            className="overflow-hidden mt-20 mx-20 mb-5 rounded-3xl"
          >
            <Image src={value.image} alt="" width={1080} height={1080} />
          </div>
        ))}
        <p
          className={`${cormorant.className} text-3xl text-center text-neutral-500`}
        >
          Love
        </p>
        <div className="w-10 ml-64 my-5">
          <Image src={butterFly} alt="butterFly" width={0} height={0} />
        </div>
        <div>
          <p
            className={`${southernaire.className} text-4xl text-primary font-medium text-center mb-3`}
          >
            Story
          </p>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${poppinsMedium.className} text-base sm:px-24 text-center text-primary mb-5`}
          >
            &quot;Datangnya cinta adalah takdir, dia datang tak pernah
            terduga&quot;
          </motion.p>
        </div>
        {dataStory.map((value, index) => (
          <Accordian key={index} value={value.judul}>
            <AccordianItem value={value.judul} trigger={value.judul}>
              <p className="mb-5">{value.tanggal}</p>
              <p>{value.story}</p>
            </AccordianItem>
          </Accordian>
        ))}
      </div>
    </div>
  );
};

export default Story;
