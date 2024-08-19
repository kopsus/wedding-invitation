import { baseURL } from "@/constant/variables";
import axios from "axios";

export const getMempelai = async () => {
  const res = await axios.get(`${baseURL}/mempelai`);

  return res.data;
};

export const getTimeline = async () => {
  const res = await axios.get(`${baseURL}/timeline`);

  return res.data;
};

export const getStory = async () => {
  const res = await axios.get(`${baseURL}/story`);

  return res.data;
};

export const getRsvp = async () => {
  const res = await axios.get(`${baseURL}/rsvp`);

  return res.data;
};

export const creteRsvp = async (body) => {
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
