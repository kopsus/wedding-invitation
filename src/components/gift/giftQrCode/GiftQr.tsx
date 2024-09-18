import React, { useState } from "react";

// font
import { alice, poppinsMedium, quicksand, southernaire } from "@/utils/fonts";

// assets
import { FaGift } from "react-icons/fa";
import Prince from "@/../public/images/Prince.png";
import "swiper/css";

// qrcode
import { useQRCode } from "next-qrcode";
import ModalQr from "./ModalQrCode";

const GiftQrCode = ({ guestName, dataMempelai }) => {
  const [openModal, setOpenModal] = useState(false);
  // console.log("Data mempelai", dataMempelai);

  const { Canvas } = useQRCode();

  return (
    <div
      className="relative bg-[#ecece9] pt-5"
      style={{ backgroundImage: `url(${Prince.src})` }}
    >
      <div className="border-2 border-primary flex flex-col gap-14 pt-14 pb-10 bg-[#ededea]">
        <p
          className={`${southernaire.className} text-[28px] text-center font-medium text-primary`}
        >
          Wedding Gift
        </p>
        <p
          className={`${alice.className} font-medium text-[#202020] text-center px-5`}
        >
          Doa restu merupakan karunia yang sangat berarti bagi kami, dan jika
          memberi adalah ungkapan tanda kasih anda, ando dapat memberi kado
          secara cashless.
        </p>
        <div className="flex flex-col gap-5 items-center px-5">
          <p
            className={`${poppinsMedium.className} text-[15px] text-center text-[#786958]`}
          >
            Klik wedding gift
          </p>
          <div
            className="flex items-center gap-2 text-white bg-primary rounded-md px-5 py-2 cursor-pointer"
            onClick={() => setOpenModal(!openModal)}
          >
            <FaGift />
            <p className={`${quicksand.className} text-[15px] font-medium`}>
              Wedding Gift
            </p>
          </div>
          {openModal && (
            <ModalQr
              closeModal={() => setOpenModal(false)}
              guestName={guestName}
              dataMempelai={dataMempelai}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftQrCode;
