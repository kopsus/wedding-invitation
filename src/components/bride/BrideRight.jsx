import Image from "next/image";

// assets
import floreTopLeft from "@/../public/images/flores/top_left.jpg";
import kupuSmall from "@/../public/images/butterfly/kupu_small.gif";
import imageDan from "@/../public/images/image_&.png";
import { BrideProfileWanita } from "./BrideProfile";

const BrideRight = ({ dataMempelai }) => {
  return (
    <>
      <div className="relative top-0 w-full h-full">
        <Image src={floreTopLeft} alt="" width={0} height={0} />
        <div className="absolute top-10 w-full h-full">
          <div className="px-7 pt-5 flex flex-col items-start">
            <BrideProfileWanita dataMempelai={dataMempelai} />
          </div>
          <div className="w-full h-full relative overflow-hidden">
            <Image
              src={dataMempelai.foto_wanita}
              alt=""
              objectFit="contain"
              layout="fill"
              objectPosition="top"
            />
          </div>
          <div className="overflow-hidden w-48 absolute bottom-64 left-20">
            <Image src={kupuSmall} alt="" width={0} height={0} />
          </div>
        </div>
      </div>
      <div className="sm:pt-20 pt-40 bg-[#ecece9]">
        <Image src={imageDan} alt="" width={0} height={0} />
      </div>
    </>
  );
};

export default BrideRight;
