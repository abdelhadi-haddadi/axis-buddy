"use client";

import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {
  return (
    <div className="px-4 lg:px-8 space-y-14 pb-10 md:flex ">
      <div className="">
        <h1 className="text-4xl font-semibold pt-10">Let&apos;s Meet</h1>
        <p className="text-lg text-gray-500 py-4">
          We are always excited to meet new people and discuss new projects.
          Please feel free to book a meeting with us.
        </p>

        {[
          {
            title: "Development + Design",
            description:
              "Turn your ideas into reality with our development and design services.",
          },

          {
            title: "Free Consultation",
            description:
              "Get expert advice on how to improve your business and increase your online presence.",
          },
          {
            title: "Technical Support",
            description:
              "Get technical support for your website or application.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={checkItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.5 }}
            className="flex gap-x-4 py-4"
          >
            <PiCheckCircle className=" rounded-md text-[#ff851a] text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
              <div className="text-gray-400">{item.description}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="md:w-1/3">
        <InlineWidget
          styles={{ height: "1000px" }}
          url="https://calendly.com/qaengine/30min"
        />
      </div>
    </div>
  );
};

export default Meeting;
