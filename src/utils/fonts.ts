import localFont from "next/font/local";
import {
  Alice,
  Quicksand,
  Readex_Pro,
  Poppins,
  Cormorant,
} from "next/font/google";

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

export const poppinsLight = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const poppinsMedium = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const poppinsSemiBold = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: "500",
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

export const georgia = localFont({
  src: "../assets/fonts/georgia/georgia.ttf",
});

export const hathemBosteem = localFont({
  src: "../assets/fonts/hathem_bosteem/Hathem Bosteem.ttf",
});
