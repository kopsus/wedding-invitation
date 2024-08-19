import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { southernaire, nightStillComes, alice } from "@/utils/fonts";
import Link from "next/link";
import floreTopLeft from "@/../public/images/flores/top_left.jpg";
import rightBride from "@/../public/images/personal/rightBride.png";
import kupuSmall from "@/../public/images/butterfly/kupu_small.gif";
import imageDan from "@/../public/images/image_&.png";

const BrideRight = ({ dataMempelai }) => {
  return (
    <>
      <div className="relative top-0 w-full h-full">
        <Image src={floreTopLeft} alt="" width={0} height={0} />
        <div className="absolute top-10 w-full h-full">
          <div className="px-7 pt-5 flex flex-col items-start">
            <p
              className={`${southernaire.className} text-primary text-6xl font-medium`}
            >
              {dataMempelai.nama_panggilan_wanita}
            </p>
            <div className="mt-3 mb-5 flex flex-col">
              <p
                className={`text-[35px] font-medium text-(rgba(41,41,41)) ${nightStillComes.className}`}
              >
                {dataMempelai.nama_lengkap_Wanita}
              </p>
              <p
                className={`${alice.className} text-gray-500 text-[17px] font-medium w-[65%]`}
              >
                {dataMempelai.nama_orang_tua_wanita}
              </p>
            </div>
            <Link href={dataMempelai.instagram_wanita} target="_blank">
              <FaInstagram
                color="white"
                size={28}
                className="bg-primary p-1 rounded-full cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-full">
            <Image src={rightBride} alt="" width={0} height={0} />
          </div>
          <div className="overflow-hidden w-48 absolute bottom-64 left-20">
            <Image src={kupuSmall} alt="" width={0} height={0} />
          </div>
        </div>
      </div>
      <div className="pt-32 bg-[#ecece9]">
        <Image src={imageDan} alt="" width={0} height={0} />
      </div>
    </>
  );
};

export default BrideRight;
