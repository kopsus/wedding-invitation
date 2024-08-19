import React from "react";

const Youtube = () => {
  return (
    <div className="shadow-md w-full h-80 p-10 bg-[#ecece9]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed?v=-hzFTJDJGkQ&list=RDMoN9ql6Yymw&index=10"
        title="Pemutar video YouTube"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
