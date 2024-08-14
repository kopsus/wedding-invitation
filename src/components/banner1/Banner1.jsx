import Image from "next/image";
import imgBanner1 from "@/assets/image/banner/banner1.jpg";
import { quicksand } from "@/assets/fonts";

const Banner1 = () => {
  return (
    <div className="max-h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={imgBanner1} alt="" className="block object-top" />
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-end gap-20 pb-5">
        <div className="flex flex-col gap-10 items-center">
          <p className="text-primary font-bold">Aku & Kamu</p>
          <p
            className={`text-white text-lg font-medium ${quicksand.className}`}
          >
            Kepada Yth :
          </p>
          <p className="text-primary font-bold">Nama Tamu</p>
        </div>
        <p
          className={`capitalize text-center text-white text-sm ${quicksand.className}`}
        >
          *Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>
    </div>
  );
};

export default Banner1;
