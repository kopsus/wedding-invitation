"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { getLove, getRsvp } from "@/api";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

// font
import { alice, georgia, hathemBosteem, poppinsLight } from "@/utils/fonts";

// assets
import { CiClock2 } from "react-icons/ci";
import imageGallery3 from "@/../public/images/person/person1.jpg";
import iconHadir from "@/../public/icon/icon_hadir.svg";
import iconRagu from "@/../public/icon/icon_ragu.svg";
import { MdCancel } from "react-icons/md";
import FormAddRsvp from "./FormAddRsvp";

export const CommentItem = ({ value, isReply, onClickReply }) => {
  return (
    <>
      <div className="px-10 py-5 border">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm font-bold text-primary">{value.nama}</p>
          <div className="flex items-center gap-2">
            {value.konfirmasi_kehadiran === "Hadir" ? (
              <Image src={iconHadir} alt="" width={0} height={0} />
            ) : value.konfirmasi_kehadiran === "Masih Ragu" ? (
              <Image src={iconRagu} alt="" width={0} height={0} />
            ) : (
              <MdCancel color="red" />
            )}
          </div>
        </div>
        <p className="text-sm">{value.ucapan}</p>
        <div className="flex items-center gap-1 text-[11px] text-primary mt-1">
          <CiClock2 size={14} />
          <p>
            {value.waktu_submit
              ? formatDistanceToNow(new Date(value.waktu_submit), {
                  addSuffix: true,
                  locale: id,
                })
              : "Waktu tidak tersedia"}
          </p>
          {/* {!isReply && ( */}
          <p
            className="font-bold cursor-pointer"
            onClick={() => onClickReply(value)}
          >
            Reply
          </p>
          {/* )} */}
        </div>
      </div>
      {value?.replies && value?.replies?.length > 0 ? (
        <div className="ml-6">
          {value?.replies?.map((reply, j) => {
            return (
              <CommentItem
                value={reply}
                onClickReply={onClickReply}
                isReply
                key={j}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
};
