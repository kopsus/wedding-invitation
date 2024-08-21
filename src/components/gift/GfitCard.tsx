import React, { useState } from "react";

// fonts
import { poppinsMedium, raleway } from "../../utils/fonts";

// assets
import logoBSI from "../../../public/images/brand/Logo-BSI.png";
import logoMandiri from "../../../public/images/brand/Logo-Mandiri.png";
import Image from "next/image";
import { IoMdCopy } from "react-icons/io";

export const GfitCard = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyNumber = (id, number) => {
    navigator.clipboard.writeText(number).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const accounts = [
    { id: 1, name: "Asmara Digital", number: "123456789", logo: logoBSI },
    { id: 2, name: "Asmara Digital", number: "987654321", logo: logoMandiri },
  ];
  return (
    <>
      {accounts.map((account) => (
        <div
          key={account.id}
          className="shadow-md border shadow-slate-500 p-3 w-full h-40 flex flex-col justify-between"
        >
          <div className="flex items-start justify-between">
            <div className="flex-[1.3] flex flex-col gap-3">
              <p className={`${raleway.className} text-[17px]`}>
                {account.name}
              </p>
              <p className={`${poppinsMedium.className}`}>{account.number}</p>
            </div>
            <div className="flex-[0.5] overflow-hidden pr-10">
              <Image src={account.logo} alt="logo" width={0} height={0} />
            </div>
          </div>
          <div className="flex items-start">
            <div
              className="bg-white py-2 px-5 flex items-center gap-2 rounded-md cursor-pointer hover:bg-[#DB980B] hover:text-white transition-all"
              onClick={() => handleCopyNumber(account.id, account.number)}
            >
              {copiedId !== account.id ? (
                <>
                  <IoMdCopy size={20} />
                  <p className={`${poppinsMedium.className} text-[15px]`}>
                    Copy Number
                  </p>
                </>
              ) : (
                <p className={`${poppinsMedium.className} text-[15px]`}>
                  berhasil disalin
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
