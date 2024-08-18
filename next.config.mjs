/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://www.youtube.com/",
        port: "",
      },
    ],
  },
};

export default nextConfig;
