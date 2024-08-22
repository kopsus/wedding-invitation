export type typeMempelai = {
  id: string;
  nama_lengkap_pria: string;
  nama_lengkap_Wanita: string;
  nama_panggilan_pria: string;
  nama_panggilan_wanita: string;
  nama_orang_tua_pria: string;
  nama_orang_tua_wanita: string;
  instagram_pria: string;
  instagram_wanita: string;
  timeline: string;
  foto_pria: string;
  foto_wanita: string;
};

export type typeCover = {
  id: string;
  image: string[];
};

export type typeBanner2 = {
  id: string;
  image: string;
};

export type typeProgram = {
  id: string;
  judul: string;
  tanggal: string;
  waktu_mulai: string;
  waktu_berakhir: string;
  tempat: string;
  maps: string;
};

export type typeLove = {
  id: string;
  image: string;
};

export type typeStory = {
  id: string;
  judul: string;
  tanggal: string;
  story: string;
};

export type typeRsvp = {
  id?: string;
  nama: string;
  ucapan: string;
  konfirmasi_kehadiran: string;
  waktu_submit: string;
  balasan?: string;
};

export type typeYtLink = {
  id: string;
  link: string;
};

export type typeGallery = {
  id: string;
  image: string;
};

export type typeFooter = {
  id: string;
  image: string;
};

export type typeAudio = {
  id: string;
  image: string;
};

export type typeGiftCard = {
  id: string;
  name: string;
  number: string;
  logo: string;
};
