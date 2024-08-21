import axios from "axios";
import { baseURL } from "../constant/variables";
import { typeRsvp } from "./types";

export const getCover = async () => {
  const res = await axios.get(`${baseURL}/cover`);

  return res.data;
};

export const getMempelai = async () => {
  const res = await axios.get(`${baseURL}/mempelai`);

  return res.data;
};

export const getBanner2 = async () => {
  const res = await axios.get(`${baseURL}/banner2`);

  return res.data;
};

export const getProgram = async () => {
  const res = await axios.get(`${baseURL}/program`);

  return res.data;
};

export const getLove = async () => {
  const res = await axios.get(`${baseURL}/love`);

  return res.data;
};

export const getStory = async () => {
  const res = await axios.get(`${baseURL}/story`);

  return res.data;
};

export const getRsvp = async () => {
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
  }

  return res.data;
};

export const creteRsvp = async (body: typeRsvp) => {
  const res = await axios.post(`${baseURL}/rsvp`, body);

  return res.data;
};

export const getYoutubeLink = async () => {
  const res = await axios.get(`${baseURL}/youtubeLink`);

  return res.data;
};

export const getgallery = async () => {
  const res = await axios.get(`${baseURL}/gallery`);

  return res.data;
};

export const getFooter = async () => {
  const res = await axios.get(`${baseURL}/footer`);

  return res.data;
};

export const getAudio = async () => {
  const res = await axios.get(`${baseURL}/audio`);

  return res.data;
};
