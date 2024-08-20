"use client";

import { creteRsvp } from "@/api";
import React, { useState } from "react";

const FormAddRsvp = React.forwardRef(({ onRsvpAdded }, ref) => {
  const messageRef = React.useRef(null);
  const [reply, setReply] = useState(null);
  const [selectedKehadiran, setSelectedKehadiran] = useState("");
  const konfirmasiKehadiran = ["Hadir", "Tidak Hadir", "Masih Ragu"];

  const cancelReply = () => {
    setReply(null);
    messageRef.current.value = "";
    messageRef?.current?.focus?.();
  };

  React.useImperativeHandle(ref, () => {
    return {
      selectForReply: (d) => {
        setReply(d);
        console.log("messageRef", messageRef);
        messageRef.current.value = "";
        messageRef?.current?.focus?.();
      },
    };
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await creteRsvp({
        nama: e.target.name.value,
        ucapan: e.target.ucapan.value,
        konfirmasi_kehadiran: selectedKehadiran,
        waktu_submit: new Date().toISOString(),
        balasan: reply?.balasan || reply?.id,
      });

      if (onRsvpAdded) {
        onRsvpAdded();
        e.target.name.value = "";
        e.target.ucapan.value = "";
        setSelectedKehadiran === "";
      }
    } catch (error) {
      console.error("Gagal mengirim RSVP", error);
    }
  };

  return (
    <form
      onSubmit={handleAdd}
      className="w-[90%] mx-auto flex flex-col items-start gap-3 mt-3 border-b border-slate-200 pb-3"
    >
      <input
        type="text"
        placeholder="Nama"
        className="input input-bordered input-sm w-full"
        name="name"
        required
      />
      <textarea
        ref={messageRef}
        placeholder={reply ? `Balas ${reply?.nama}` : "Ucapan"}
        className="textarea textarea-bordered w-full"
        name="ucapan"
        required
      />
      <select
        className="select select-bordered w-full select-sm"
        name="konfirmasi_kehadiran"
        required
        value={selectedKehadiran}
        onChange={(e) => setSelectedKehadiran(e.target.value)}
      >
        <option disabled value="">
          Konfirmasi Kehadiran
        </option>
        {konfirmasiKehadiran.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="flex gap-2">
        {reply && (
          <button
            type="button"
            onClick={cancelReply}
            className="bg-primary px-6 py-2 rounded-md text-white font-medium"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="bg-primary px-6 py-2 rounded-md text-white font-medium"
        >
          Kirim
        </button>
      </div>
    </form>
  );
});

FormAddRsvp.displayName = "FormAddRsvp";
export default FormAddRsvp;
