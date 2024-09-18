"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RiMailOpenFill } from "react-icons/ri";
import { fadeInUp, zoomIn } from "@/utils/animation";
import { southernaire, quicksand, tms, poppinsMedium } from "@/utils/fonts";
import Banner2 from "../banner2/Banner2";
import TimeBack from "../timeBack/TimeBack";
import BrideRight from "../bride/BrideRight";
import BrideLeft from "../bride/BrideLeft";
import Audio from "../audio/Audio";
import Gallery from "../gallery/Gallery";
import Story from "../story/Story";
import PlatformOnline from "../platformOnline/PlatformOnline";
import GiftCard from "../gift/giftCard/GiftCard";
import Youtube from "../youtube/Youtube";
import Footer from "../footer/Footer";
import { useSearchParams } from "next/navigation";
import Rsvp from "../rsvp/Rsvp";
import Carousel from "../carousel/Carousel";
import GiftQrCode from "../gift/giftQrCode/GiftQr";
import { TimeLine } from "../timeline/TimeLine";

const Banner1 = ({
  dataMempelai,
  dataCover,
  dataBanner2,
  dataAudio,
  dataGallery,
  dataGiftCard,
  dataStory,
  dataLove,
  dataYtLink,
  dataFooter,
  dataProgram,
  params,
}) => {
  const [showButton, setShowButton] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const contentRef = useRef(null);
  const audioRef = useRef(null);
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Nama Tamu";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % dataCover.image.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [dataCover]);

  useEffect(() => {
    if (showContent && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showContent]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed: ", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleClick = () => {
    setShowButton(false);
    setShowContent(true);
    toggleAudio();
  };

  return (
    <>
      <div className="min-h-screen overflow-hidden flex justify-center items-center relative">
        <div className="overflow-hidden h-screen w-full bg-white">
          {dataCover.image < 0 ? (
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
                src={dataCover.image[currentImageIndex]}
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
            {guestName}
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
      {showContent && (
        <div ref={contentRef}>
          <Banner2 dataMempelai={dataMempelai} dataBanner2={dataBanner2} />
          <TimeBack dataMempelai={dataMempelai} />
          <BrideRight dataMempelai={dataMempelai} />
          <BrideLeft dataMempelai={dataMempelai} />
          <Audio
            dataAudio={dataAudio}
            audioRef={audioRef}
            isPlaying={isPlaying}
            toggleAudio={toggleAudio}
            setIsPlaying={setIsPlaying}
          />
          <TimeLine dataProgram={dataProgram} />
          <Gallery dataGallery={dataGallery} />
          <Story dataLove={dataLove} dataStory={dataStory} />
          <PlatformOnline />
          <Rsvp />
          <GiftCard dataGiftCard={dataGiftCard} />
          <GiftQrCode guestName={guestName} dataMempelai={dataMempelai} />
          <Carousel dataGallery={dataGallery} />
          <Youtube dataYtLink={dataYtLink} />
          <Footer dataFooter={dataFooter} />
        </div>
      )}
    </>
  );
};

export default Banner1;
