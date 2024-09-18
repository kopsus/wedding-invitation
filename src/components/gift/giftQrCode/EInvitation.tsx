import { alice, cormorant, georgia } from "@/utils/fonts";
import { formatDateTimeline } from "@/utils/format";
import { useQRCode } from "next-qrcode";
import Link from "next/link";

const EInvitation = ({ guestName, dataMempelai }) => {
  const { Canvas } = useQRCode();

  console.log(guestName);

  return (
    <div className="my-5">
      <div className="bg-primary py-[30px] px-[5px] text-center flex flex-col gap-3">
        <p className={`${alice.className} text-base text-white`}>
          The Wedding Of
        </p>
        <p
          className={`${cormorant.className} font-medium text-[28px] text-white`}
        >
          {dataMempelai?.nama_panggilan_pria} &{" "}
          {dataMempelai?.nama_panggilan_wanita}
        </p>
        <p className={`${alice.className} text-sm text-white`}>
          {formatDateTimeline(dataMempelai?.timeline)}
        </p>
      </div>
      <div className="bg-[#E6DED8]">
        <div className="pt-4 px-3">
          <div className="flex items-center">
            <div className="text-center flex-1">
              <p className={`${georgia.className} text-black text-sm`}>
                Dear:{" "}
              </p>
              <p className={`${georgia.className} text-lg text-black`}>
                {guestName}
              </p>
            </div>
            <div
              className={`${
                guestName === "Nama Tamu"
                  ? "h-44 w-44 flex-1 border border-primary"
                  : ""
              }`}
            >
              {guestName !== "Nama Tamu" && (
                <Canvas
                  text={guestName}
                  options={{
                    errorCorrectionLevel: "M",
                    margin: 2,
                    scale: 4,
                    width: 170,
                  }}
                />
              )}
            </div>
          </div>
          <p
            className={`${georgia.className} text-black leading-6 px-3 my-5 text-center`}
          >
            Please show this QR Code to the officer at the event location. Scan
            QR Code is used to record attendance and exchange souvenirs.
          </p>
        </div>
        <hr className="border border-dashed border-black" />
        <div className="flex justify-center py-3">
          <Link
            href={"https://www.tibradigital.id"}
            className={`${georgia.className} text-sm text-black text-center`}
          >
            www.tibradigital.id
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EInvitation;
