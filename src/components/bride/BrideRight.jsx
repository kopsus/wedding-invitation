import Image from "next/image";
import { motion } from "framer-motion";

// font
import { southernaire, nightStillComes, alice } from "@/utils/fonts";

// assets
import { FaInstagram } from "react-icons/fa";
import floreTopLeft from "@/../public/images/flores/top_left.jpg";
import kupuSmall from "@/../public/images/butterfly/kupu_small.gif";
import imageDan from "@/../public/images/image_&.png";
import { fadeIn, fadeInUp } from "@/utils/animation";

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
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-3 mb-5 flex flex-col"
            >
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
            </motion.div>
            <motion.a
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 3 }}
              href={dataMempelai.instagram_wanita}
              target="_blank"
            >
              <FaInstagram
                color="white"
                size={28}
                className="bg-primary p-1 rounded-full cursor-pointer"
              />
            </motion.a>
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
