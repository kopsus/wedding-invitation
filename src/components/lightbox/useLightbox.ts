import { useState } from "react";

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src, size) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}

export const useLightbox = () => {
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(-1);

  const slides = images?.map((src) => ({
    width: 1280,
    height: 1280,
    src,
    // src: nextImageUrl(src, width),
    srcSet: imageSizes
      .concat(...deviceSizes)
      .filter((size) => size <= 1280)
      .map((size) => ({
        // src: nextImageUrl(src, size),
        src,
        width: size,
        height: Math.round((1280 / 1280) * size),
      })),
  }));

  const open = (index = 0, imgs = []) => {
    setVisible(true);
    setIndex(index);
    setImages(imgs);
  };

  const close = () => {
    setVisible(false);
    setIndex(-1);
    setImages([]);
  };

  return {
    index,
    open,
    close,
    visible,
    slides,
    images,
  };
};
