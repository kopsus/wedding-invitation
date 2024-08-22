import Image from "next/image";
import { nightStillComes, southernaire } from "@/utils/fonts";
import { formatDate } from "@/utils/format";

const Banner2 = ({ dataMempelai, dataBanner2 }) => {
  return (
    <div className="max-h-screen overflow-hidden flex justify-center items-center relative">
      {dataBanner2.map((value, index) => (
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
