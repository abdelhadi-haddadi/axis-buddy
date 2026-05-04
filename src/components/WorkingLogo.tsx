import { InfiniteMovingLogos } from "./ui/infinite-moving-logos";

const WorkingLogo = () => {
  const data = [
    {
      logo: "/tools/framer.svg",
      name: "Framer",
    },
    {
      logo: "/tools/after-effects.svg",
      name: "After Effect",
    },
    {
      logo: "/tools/adobe-illustrator.svg",
      name: "Illustrator",
    },
    {
      logo: "/tools/figma.svg",
      name: "Figma",
    },
    {
      logo: "/tools/react.svg",
      name: "React",
    },
    {
      logo: "/tools/filmora.svg",
      name: "Filmora",
    },  {
    logo: "/tools/php.svg",
    name: "PHP",
  },
  {
    logo: "/tools/javascript.svg",
    name: "JavaScript",
  },
  {
    logo: "/tools/typescript.svg",
    name: "TypeScript",
  },
  {
    logo: "/tools/laravel.svg",
    name: "Laravel",
  },
  {
    logo: "/tools/react.svg",
    name: "React",
  },
  {
    logo: "/tools/nextjs.svg",
    name: "Next.js",
  },
  {
    logo: "/tools/express.svg",
    name: "Express.js",
  },
  {
    logo: "/tools/mysql.svg",
    name: "MySQL",
  },
  {
    logo: "/tools/mongodb.svg",
    name: "MongoDB",
  },
  {
    logo: "/tools/puppeteer.svg",
    name: "Puppeteer",
  },
  {
    logo: "/tools/jest.svg",
    name: "Jest",
  },
  {
    logo: "/tools/docker.svg",
    name: "Docker",
  },
  {
    logo: "/tools/git.svg",
    name: "Git",
  },
  {
    logo: "/tools/linux.svg",
    name: "Linux",
  },
  {
    logo: "/tools/api.svg",
    name: "REST APIs",
  },
  ];

  return (
    <div id="process" className="overflow-hidden mt-5">
      <InfiniteMovingLogos direction="left" speed="slow" items={data} />
    </div>
  );
};

export default WorkingLogo;
