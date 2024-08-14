import Image from "next/image";
import floreTopLeft from "@/assets/image/flores/top_left.jpg";
import { FaInstagram } from "react-icons/fa";
import rightBride from "@/assets/image/personal/rightBride.png";
import { southernaire, nightStillComes, alice } from "@/utils/fonts";

const BrideRight = () => {
  return (
    <div className="relative top-0 w-full h-full">
      <Image src={floreTopLeft} alt="" width={0} height={0} />
      <div className="absolute top-0 w-full h-full">
        <div className="px-7 pt-14">
          <p className={`${southernaire.className} text-primary text-6xl`}>
            Nia
          </p>
          <div className="mt-3 mb-5">
            <p
              className={`${nightStillComes.className} text-3xl text-(rgba(41,41,41))`}
            >
              Riza Cantika. M, Sos
            </p>
            <p className={`${alice.className} text-gray-500 text-lg w-[65%]`}>
              Putra Kedua dari Bapak H. Maratua dan Ibu Hj. Yunar Lisma Pohan
            </p>
          </div>
          <FaInstagram
            color="white"
            size={36}
            className="bg-primary p-2 rounded-full"
          />
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <Image src={rightBride} alt="" width={0} height={0} />
      </div>
    </div>
  );
};

export default BrideRight;
