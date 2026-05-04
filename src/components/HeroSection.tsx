"use client";

import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CustomButton from "./_components/CustomButton";
import ServiceItem from "./_components/ServiceCard";
import { Cover } from "./ui/cover";
import { TextScramble } from "./ui/text-scramble";
import heroData from "@/data.json";

// TypeScript interface
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

const { hero } = heroData as HeroData;

// Define a type for button configuration
type ButtonConfig = {
  key: string;
  link: string;
  variant: "outline" | "default";
  className: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  target?: string;
  ariaLabel?: string;
  linkClassName?: string;
};

const primaryButtons: ButtonConfig[] = [
  {
    key: "linkedin",
    link: hero.buttons.linkedin.url,
    icon: <FaLinkedin size={28} />,
    variant: "outline",
    className: "py-7 px-10 md:px-7",
    ariaLabel: hero.buttons.linkedin.ariaLabel,
    target: "_blank",
  },
  {
    key: "bookCall",
    link: hero.buttons.bookCall.url,
    children: hero.buttons.bookCall.text,
    variant: "default",
    className: "py-7 px-10 md:px-16 md:text-xl w-full md:w-auto",
  },
];

const secondaryButtons: ButtonConfig[] = [
  {
    key: "showcase",
    link: hero.buttons.showcase.url,
    children: hero.buttons.showcase.text,
    variant: "outline",
    className: "py-7 px-10 md:px-16 md:text-xl w-full",
  },
  {
    key: "whatsapp",
    link: hero.buttons.whatsapp.url,
    icon: <FaWhatsapp size={28} />,
    variant: "default",
    className: "py-7 px-10 md:px-7",
    ariaLabel: hero.buttons.whatsapp.ariaLabel,
    target: "_blank",
  },
];

const HeroSection = () => {
  return (
    <section className="mt-14 lg:mt-20 space-y-4 lg:space-y-8">
      {/* Title with scramble animation */}
      <h1 className="text-3xl md:text-6xl font-semibold max-w-7xl mx-auto md:text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-10">
        {hero.titlePrefix} <br />
        <Cover>
          <TextScramble duration={2} characterSet={hero.scrambleCharacterSet}>
            {hero.brandName}
          </TextScramble>
        </Cover>
      </h1>

      {/* Subtitle */}
      <p className="text-center text-xl text-gray-500">{hero.subtitle}</p>

      {/* Button groups */}
      <div className="md:flex md:justify-center md:items-center gap-x-4 space-y-4 md:space-y-0">
        {/* Left button group */}
        <div className="flex items-center justify-center gap-x-4">
          {primaryButtons.map((btn) => (
            <CustomButton
              key={btn.key}
              link={btn.link}
              variant={btn.variant}
              className={btn.className}
              target={btn.target}
              aria-label={btn.ariaLabel}
              linkClassName={btn.linkClassName}
            >
              {btn.icon || btn.children}
            </CustomButton>
          ))}
        </div>

        {/* Right button group */}
        <div className="flex items-center justify-center gap-x-4">
          {secondaryButtons.map((btn) => (
            <CustomButton
              key={btn.key}
              link={btn.link}
              variant={btn.variant}
              className={btn.className}
              target={btn.target}
              aria-label={btn.ariaLabel}
            >
              {btn.icon || btn.children}
            </CustomButton>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 items-start text-left md:justify-items-center md:mx-auto pt-6 md:mt-16"
        id="service"
      >
        {hero.services.map((service, index) => (
          <ServiceItem key={index} text={service} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
