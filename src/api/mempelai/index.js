import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASEURL;

export const getMempelai = async () => {
  const res = await axios.get(`${baseURL}/mempelai`);

  return res.data;
};
