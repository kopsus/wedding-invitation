import localFont from "next/font/local";
import { Alice, Quicksand, Readex_Pro } from "next/font/google";

export const quicksand = Quicksand({
  weight: "500",
  subsets: ["latin"],
});

export const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

export const readex_pro = Readex_Pro({
  subsets: ["latin"],
});

export const southernaire = localFont({
  src: "../assets/fonts/southern_aire/SouthernAire.ttf",
});

export const tms = localFont({
  src: "../assets/fonts/tms/times.ttf",
});

export const nightStillComes = localFont({
  src: "../assets/fonts/night_still_comes/NightStillComes_mine_final_sample.otf",
});

export const euphorig = localFont({
  src: "../assets/fonts/euphorigenic/Euphorigenic.otf",
});
