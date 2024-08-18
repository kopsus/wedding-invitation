import imageGallery3 from "@/assets/image/person/person3.jpg";
import { alice, georgia, hathemBosteem, poppinsLight } from "@/utils/fonts";

const Rsvp = () => {
  const konfirmasiKehadiran = ["Hadir", "Tidak Hadir", "Masih Ragu"];
  const dataKehadiran = [
    {
      name: "Name",
      ucapan: "Selamat",
      hadir: "Hadir",
    },
    {
      name: "Name",
      ucapan: "Selamat",
      hadir: "Tidak Hadir",
    },
    {
      name: "Name",
      ucapan: "Selamat",
      hadir: "Masih Ragu",
    },
  ];

  return (
    <div
      className="bg-cover min-h-screen"
      style={{ backgroundImage: `url(${imageGallery3.src})` }}
    >
      <div className="flex flex-col gap-5 text-center pt-3 pb-10">
        <p
          className={`${georgia.className} text-[32px] font-medium text-primary leading-8`}
        >
          Rsvp
        </p>
        <p
          className={`${hathemBosteem.className} text-[32px] font-semibold text-white leading-8`}
        >
          Ucaparan
        </p>
        <p className={`${alice.className} font-medium leading-6 text-white`}>
          Konfirmasi Kehadiran & Ucapan Selamat
        </p>
      </div>
      <div className="bg-[#eeeeeb] w-[90%] mx-auto rounded-lg ">
        <div className="pt-3 border-b border-slate-200">
          <p className="text-center text-primary font-medium">Comment</p>
          <div className="grid grid-cols-3 mx-auto gap-5 w-[80%] text-primary">
            <div className="text-center border border-primary p-2 rounded-md my-5">
              <p className="text-lg font-bold leading-7">2</p>
              <p className={`${poppinsLight.className} text-xs`}>Hadir</p>
            </div>
            <div className="text-center border border-primary p-2 rounded-md my-5">
              <p className="text-lg font-bold leading-7">2</p>
              <p className={`${poppinsLight.className} text-xs`}>Tidak Hadir</p>
            </div>
            <div className="text-center border border-primary p-2 rounded-md my-5">
              <p className="text-lg font-bold leading-7">2</p>
              <p className={`${poppinsLight.className} text-xs`}>Hadir</p>
            </div>
          </div>
        </div>
        <form
          action=""
          className="w-[90%] mx-auto flex flex-col items-start gap-3 mt-3 border-b border-slate-200 pb-3"
        >
          <input
            type="text"
            placeholder="Nama"
            className="input input-bordered input-sm w-full"
          />
          <textarea
            placeholder="Ucapan"
            className="textarea textarea-bordered w-full"
          />
          <select className="select select-bordered w-full select-sm">
            <option disabled selected>
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
        {dataKehadiran.map((value, index) => (
          <div key={index} className="px-10 py-5 border max-h-10">
            <div className="flex items-center gap-2 mb-2">
              <p className="">{value.name}</p>
              <p>icon {value.hadir}</p>
            </div>
            <p>{value.ucapan}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rsvp;
