"use client";
import Image from "next/image";
import Title from "./Title";
import Box from "./box/Box";
import Footer from "./Footer";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0,scale:0.5 }}
      whileInView={{ opacity: 1,scale:1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="w-full xs:p-4 relative xs:flex xs:gap-8 xs:flex-col-reverse flex-col md:flex-row lg:grid lg:grid-flow-col lg:grid-cols-2"
    >
      <div className="md:w-3/4 lg:w-full 2xl:h-[50rem] xl:h-[40rem] lg:h-[35rem] md:h-[40rem] xs:h-[30rem] xs:w-full flex justify-center">
        <div className="relative rounded-xl xs:w-3/4 md:w-4/5 lg:w-[66%] xl:w-[64%] 2xl:w-[66%]  md:h-full">
          <Image src={"/landing-page.jpg"} fill className="rounded-3xl" />
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end text-links text-right lg:px-12 xl:px-20 xs:gap-6 md:gap-8 lg:gap-8 2xl:gap-20 text-nowrap">
        <Title />
        <Box />
        <Footer />
      </div>
    </motion.div>
  );
};

export default LandingPage;
