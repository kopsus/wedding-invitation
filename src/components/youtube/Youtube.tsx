"use client";

import { getYoutubeLink } from "../../api";
import React, { useEffect, useState } from "react";

const Youtube = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getYoutubeLink();
      setData(res);
    };

    fetchData();
  }, []);

  return (
    <div className="shadow-md w-full h-80 p-10 bg-[#ecece9]">
      {data.map((value, index) => (
        <iframe
          key={index}
          className="w-full h-full"
          src={value.link}
          title="Pemutar video YouTube"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

export default Youtube;
