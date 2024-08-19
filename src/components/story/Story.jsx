"use client";

import Image from "next/image";
import { cormorant, poppinsMedium, southernaire } from "@/utils/fonts";
import Accordian, { AccordianItem } from "./AccordionItem";
import floreBottomRight from "@/../public/images/flores/bottom_right.jpg";
import butterFly from "@/../public/images/butterfly/kupu_big.gif";
import imageGallery3 from "@/../public/images/person/person3.jpg";

const Story = () => {
  const Story = [
    {
      title: "Awal Bertemu",
      date: "15 April 2022",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis, aliquid modi officia perspiciatis sit molestiae corrupti placeat veritatis rem aliquam voluptas.",
    },
    {
      title: "Lamaran",
      date: "15 April 2022",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis, aliquid modi officia perspiciatis sit molestiae corrupti placeat veritatis rem aliquam voluptas.",
    },
    {
      title: "Resepsi",
      date: "15 April 2022",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis, aliquid modi officia perspiciatis sit molestiae corrupti placeat veritatis rem aliquam voluptas.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-bottom-right px-5 pb-5"
      style={{
        backgroundImage: `url(${floreBottomRight.src})`,
      }}
    >
      <div className="border-2 border-primary">
        <div className="overflow-hidden mt-20 mx-20 mb-5 rounded-3xl">
          <Image src={imageGallery3} alt="" width={0} height={0} />
        </div>
        <p
          className={`${cormorant.className} text-3xl text-center text-neutral-500`}
        >
          Love
        </p>
        <div className="w-10 ml-64 my-5">
          <Image src={butterFly} alt="butterFly" width={0} height={0} />
        </div>
        <div>
          <p
            className={`${southernaire.className} text-4xl text-primary font-medium text-center mb-3`}
          >
            Story
          </p>
          <p
            className={`${poppinsMedium.className} text-base px-24 text-center text-primary mb-5`}
          >
            &quot;Datangnya cinta adalah takdir, dia datang tak pernah
            terduga&quot;
          </p>
        </div>
        {Story.map((value, index) => (
          <Accordian key={index}>
            <AccordianItem value={value.title} trigger={value.title}>
              <p className="mb-5">{value.date}</p>
              <p>{value.story}</p>
            </AccordianItem>
          </Accordian>
        ))}
      </div>
    </div>
  );
};

export default Story;
