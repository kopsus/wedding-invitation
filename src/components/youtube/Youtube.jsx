import React from "react";

const Youtube = () => {
  return (
    <div className="shadow-md w-full h-80 p-10 bg-[#ecece9]">
      <div className="overflow-hidden w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed?v=-hzFTJDJGkQ&list=RDMoN9ql6Yymw&index=7"
          title="Pemutar video YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
