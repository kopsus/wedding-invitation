"use client";

import { getAudio, getMempelai } from "@/api";
import { useEffect, useRef, useState } from "react";
import Banner1 from "@/components/banner1/Banner1";
import Banner2 from "@/components/banner2/Banner2";
import BrideLeft from "@/components/bride/BrideLeft";
import BrideRight from "@/components/bride/BrideRight";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Gift from "@/components/gift/Gift";
import PlatformOnline from "@/components/platformOnline/PlatformOnline";
import Rsvp from "@/components/rsvp/Rsvp";
import Story from "@/components/story/Story";
import TimeBack from "@/components/timeBack/TimeBack";
import { TimeLine } from "@/components/timeline/TimeLine";
import Youtube from "@/components/youtube/Youtube";
import { FaPause, FaPlay } from "react-icons/fa";

export default function Home({ params }) {
  const [data, setData] = useState(null);
  const [dataAudio, setDataAudio] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDataMempelai = await getMempelai();
        const fetchedDataAudio = await getAudio();
        setData(fetchedDataMempelai[0]);
        setDataAudio(fetchedDataAudio);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (showContent && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showContent]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const scrollToContent = () => {
    setShowContent(true);
    toggleAudio();
  };

  return (
    <>
      <Banner1
        dataMempelai={data}
        scrollToContent={scrollToContent}
        params={params}
      />
      {showContent && (
        <>
          <div ref={contentRef}>
            <Banner2 dataMempelai={data} />
            <TimeBack dataMempelai={data} />
            <BrideRight dataMempelai={data} />
            <BrideLeft dataMempelai={data} />
            <TimeLine />
            <Gallery />
            <Story />
            <PlatformOnline />
            <Rsvp />
            <Gift params={params} />
            <Youtube />
            <Footer />
          </div>
          <div
            className="z-50 fixed bottom-10 right-[50px] md:right-1/3 w-8 h-8 p-1 rounded-full bg-primary flex justify-center items-center text-white cursor-pointer"
            onClick={toggleAudio}
          >
            {!isPlaying ? <FaPlay /> : <FaPause />}
          </div>
        </>
      )}
      {dataAudio.map((value, index) => (
        <audio key={index} ref={audioRef} src={value.audio} loop />
      ))}
    </>
  );
}
