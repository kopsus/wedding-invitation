import Image from "next/image";
import floreTopLeft from "@/assets/image/flores/top_left.jpg";
import { FaInstagram } from "react-icons/fa";
import rightBride from "@/assets/image/personal/rightBride.png";
import { southernaire, nightStillComes, alice } from "@/utils/fonts";
import Link from "next/link";
import kupuSmall from "@/assets/image/butterfly/kupu_small.gif";

const BrideRight = () => {
  const biodataMempelaiWanita = [
    {
      namaPanggilan: "Nia",
      namaLengakp: "Riza Cantika. M, Sos",
      namaOrtu:
        "Putra Kedua dari Bapak H. Maratua dan Ibu Hj. Yunar Lisma Pohan",
      linkIg: "https://instagram.com",
      potoProfile: rightBride,
    },
  ];

  return biodataMempelaiWanita.map((value, index) => (
    <div key={index} className="relative top-0 w-full h-full">
      <Image src={floreTopLeft} alt="" width={0} height={0} />
      <div className="absolute top-0 w-full h-full">
        <div className="px-7 pt-5 flex flex-col items-start">
          <p className={`${southernaire.className} text-primary text-6xl`}>
            {value.namaPanggilan}
          </p>
          <div className="mt-3 mb-5 flex flex-col">
            <p
              className={`text-3xl text-(rgba(41,41,41)) ${nightStillComes.className}`}
            >
              {value.namaLengakp}
            </p>
            <p className={`${alice.className} text-gray-500 text-lg w-[65%]`}>
              {value.namaOrtu}
            </p>
          </div>
          <Link href={value.linkIg} target="_blank">
            <FaInstagram
              color="white"
              size={36}
              className="bg-primary p-1 rounded-full cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-full">
          <Image src={value.potoProfile} alt="" width={0} height={0} />
        </div>
        <div className="overflow-hidden w-48 absolute bottom-64 left-20">
          <Image src={kupuSmall} alt="" width={0} height={0} />
        </div>
      </div>
    </div>
  ));
};

export default BrideRight;
