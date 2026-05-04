"use client";

import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CustomButton from "./_components/CustomButton";
import ServiceItem from "./_components/ServiceCard";
import { Cover } from "./ui/cover";
import { TextScramble } from "./ui/text-scramble";
import heroData from "@/data.json"; // adjust the path to your actual data.json location

// TypeScript interface (optional but recommended)
interface HeroData {
  hero: {
    titlePrefix: string;
    brandName: string;
    subtitle: string;
    buttons: {
      linkedin: { url: string; icon: string; ariaLabel: string };
      bookCall: { url: string; text: string };
      showcase: { url: string; text: string };
      whatsapp: { url: string; icon: string; ariaLabel: string };
    };
    services: string[];
    scrambleCharacterSet: string;
  };
}

const typedData = heroData as HeroData;
const { hero } = typedData;

const HeroSection = () => {
  return (
    <main className="mt-14 lg:mt-20 space-y-4 lg:space-y-8">
      <h1 className="text-3xl md:text-6xl font-semibold max-w-7xl mx-auto md:text-center relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-10 text-center">
        {hero.titlePrefix} <br />{" "}
        <Cover>
          <TextScramble
            duration={2}
            characterSet={hero.scrambleCharacterSet}
          >
            {hero.brandName}
          </TextScramble>
        </Cover>
      </h1>

      <p className="text-center text-xl text-gray-500">
        {hero.subtitle}
      </p>

      <div className="md:flex md:justify-center items-center gap-x-4 ">
        <div className="flex items-center gap-x-4 md:gap-x-3 w-full md:w-fit">
          <CustomButton
            target="_blank"
            variant={"outline"}
            className="py-7 px-10 md:px-7 mb-4 md:mb-0"
            link={hero.buttons.linkedin.url}
          >
            <FaLinkedin size={32} />
          </CustomButton>

          <CustomButton
            linkClassName="w-full md:w-fit"
            className="py-7 px-10 md:px-16 md:text-xl w-full mb-4 md:mb-0"
            link={hero.buttons.bookCall.url}
          >
            {hero.buttons.bookCall.text}
          </CustomButton>
        </div>
        <div className="flex items-center gap-x-4 md:gap-x-3 w-full md:w-fit">
          <CustomButton
            linkClassName="w-full md:w-fit"
            link={hero.buttons.showcase.url}
            variant={"outline"}
            className="py-7 px-10 md:px-16 md:text-xl w-full"
          >
            {hero.buttons.showcase.text}
          </CustomButton>
          <CustomButton
            target="_blank"
            link={hero.buttons.whatsapp.url}
            className="py-7 px-10 md:px-7 mb-4 md:mb-0"
          >
            <FaWhatsapp />
          </CustomButton>
        </div>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 items-center text-left md:justify-items-center md:mx-auto pt-6 md:mt-16"
        id="service"
      >
        {hero.services.map((service, index) => (
          <ServiceItem key={index} text={service} />
        ))}
      </div>
    </main>
  );
};

export default HeroSection;
