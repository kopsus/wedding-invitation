import Banner1 from "@/components/banner1/Banner1";
import Banner2 from "@/components/banner2/Banner2";
import BrideLeft from "@/components/bride/BrideLeft";
import BrideRight from "@/components/bride/BrideRight";
import Gallery from "@/components/gallery/Gallery";
import Story from "@/components/story/Story";
import TimeBack from "@/components/timeBack/TimeBack";
import { TimeLine } from "@/components/timeline/TimeLine";

export default function Home() {
  return (
    <div>
      <Banner1 />
      <Banner2 />
      <TimeBack />
      <BrideRight />
      <BrideLeft />
      <TimeLine />
      <Gallery />
      <Story />
    </div>
  );
}
