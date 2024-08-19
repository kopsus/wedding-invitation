"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { nightStillComes, southernaire } from "@/utils/fonts";
import { formatDate } from "@/utils/format";
import { getBanner2 } from "@/api";

const Banner2 = ({ dataMempelai }) => {
  const [data, setData] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getBanner2();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-h-screen overflow-hidden flex justify-center items-center relative">
      {data?.map((value, index) => (
        <Image
          key={index}
          src={value.image}
          alt="banner 2"
          width={1080}
          height={1080}
        />
      ))}
      <div className="absolute right-24 bottom-44 text-primary">
        <p className={`${southernaire.className} text-[45px] font-medium`}>
          {dataMempelai?.nama_panggilan_wanita} &{" "}
          {dataMempelai?.nama_panggilan_pria}
        </p>
        <p className={`${nightStillComes.className} text-[19px] font-medium`}>
          {formatDate(dataMempelai?.timeline)}
        </p>
      </div>
    </div>
  );
};

export default Banner2;
