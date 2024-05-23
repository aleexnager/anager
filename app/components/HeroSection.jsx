"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import AchievementsSection from "./AchievementsSection";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const pdfURL = "/docs/Alejandro\ Náger\ CV.pdf"; // URL del archivo PDF
    const link = document.createElement("a"); // Crea un enlace temporal
    link.href = pdfURL;
    link.download = "Alejandro Náger CV.pdf"; // Nombre del archivo que se descargará
    link.click();
  };
  

  return (
    <section id="home" className="mt-24 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Alex",
                3000,
                "a Web Developer",
                3000,
                "a Computer Engineer",
                3000,
              ]}
              speed={40}
              deletionSpeed={60}
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my website! I&apos;m a student at the Polytechnic
            University of Madrid (UPM) studying computer science engineering.
            I&apos;m passionate about technology and constantly seeking to learn
            new things and stay up-to-date with the latest trends in the
            computer world.
          </p>
          <div>
            <motion.button 
              onClick={scrollToContact}
              whileTap={{ scale: 0.7 }}
              transition={{ scale: {duration: 0.2} }}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:text-white hover:from-secondary-500 hover:to-primary-500 text-black font-semibold">
                Contact Me
            </motion.button>
            <Link href={""}>
              <motion.button
                onClick={downloadCV}
                whileTap={{ scale: 0.7 }}
                transition={{ scale: {duration: 0.2} }}
                className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white font-semibold hover:font-bold mt-3">
                <span className="block bg-[#121212] hover:text-[#121212] hover:bg-white rounded-full px-5 py-2">
                  Download CV
                </span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <motion.div
            animate={{ translateY: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="mt-2 md:mt-0 relative hidden md:block"
          >
            <div className="rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"></div>
            <Image
              src="/images/la-rana-gustavo.jpg"
              alt="profile picture"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={385}
              height={385}
            />
          </motion.div>
        </motion.div>
      </div>
      <AchievementsSection />
    </section>
  );
};

export default HeroSection;
