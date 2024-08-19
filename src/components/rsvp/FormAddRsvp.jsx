"use client";

import { creteRsvp } from "@/api";
import React, { useState } from "react";

const FormAddRsvp = ({ onRsvpAdded }) => {
  const [selectedKehadiran, setSelectedKehadiran] = useState("");
  const konfirmasiKehadiran = ["Hadir", "Tidak Hadir", "Masih Ragu"];

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await creteRsvp({
        nama: e.target.name.value,
        ucapan: e.target.ucapan.value,
        konfirmasi_kehadiran: selectedKehadiran,
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
        placeholder="Ucapan"
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
      <button
        type="submit"
        className="bg-primary px-6 py-2 rounded-md text-white font-medium"
      >
        Kirim
      </button>
    </form>
  );
};

export default FormAddRsvp;
