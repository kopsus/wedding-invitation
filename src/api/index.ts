import axios from "axios";
import { baseURL } from "../constant/variables";
import {
  typeAudio,
  typeBanner2,
  typeCover,
  typeFooter,
  typeGallery,
  typeGiftCard,
  typeLove,
  typeMempelai,
  typeProgram,
  typeRsvp,
  typeStory,
  typeYtLink,
} from "./types";

export const getCover = async (): Promise<typeCover[]> => {
  const res = await axios.get(`${baseURL}/cover`);

  return res.data;
};

export const getMempelai = async (): Promise<typeMempelai[]> => {
  const res = await axios.get(`${baseURL}/mempelai`);

  return res.data;
};

export const getBanner2 = async (): Promise<typeBanner2[]> => {
  const res = await axios.get(`${baseURL}/banner2`);

  return res.data;
};

export const getProgram = async (): Promise<typeProgram[]> => {
  const res = await axios.get(`${baseURL}/program`);

  return res.data;
};

export const getLove = async (): Promise<typeLove[]> => {
  const res = await axios.get(`${baseURL}/love`);

  return res.data;
};

export const getStory = async (): Promise<typeStory[]> => {
  const res = await axios.get(`${baseURL}/story`);

  return res.data;
};

export const getRsvp = async (): Promise<typeRsvp[]> => {
  const res = await axios.get(`${baseURL}/rsvp`);

  if (res?.data?.length > 0) {
    res.data = res?.data?.map((d) => {
      const replies = res?.data?.filter((e) => e?.balasan === d.id);

      return {
        ...d,
        replies,
      };
    });

    res.data = res?.data?.filter((d) => !d?.balasan);
    res.data.sort(
      (a, b) =>
        new Date(b.waktu_submit).getTime() - new Date(a.waktu_submit).getTime()
    );
  }

  return res.data;
};

export const creteRsvp = async (body: typeRsvp) => {
  const res = await axios.post(`${baseURL}/rsvp`, body);

  return res.data;
};

export const getYoutubeLink = async (): Promise<typeYtLink[]> => {
  const res = await axios.get(`${baseURL}/youtubeLink`);

  return res.data;
};

export const getgallery = async (): Promise<typeGallery[]> => {
  const res = await axios.get(`${baseURL}/gallery`);

  return res.data;
};

export const getFooter = async (): Promise<typeFooter[]> => {
  const res = await axios.get(`${baseURL}/footer`);

  return res.data;
};

export const getAudio = async (): Promise<typeAudio[]> => {
  const res = await axios.get(`${baseURL}/audio`);

  return res.data;
};

export const getGiftCard = async (): Promise<typeGiftCard[]> => {
  const res = await axios.get(`${baseURL}/giftCard`);

  return res.data;
};
