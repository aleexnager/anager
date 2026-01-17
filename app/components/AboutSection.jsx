"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { tabData } from "../lib/constants";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <br />
      <br />
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 pt-12 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/foto-perfil.JPG"
          alt="Mexico!"
          width={500}
          height={500}
          className="rounded-3xl"
        />
        <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Me
            </span>
          </h2>
          <p className="text-base md:text-lg">
            As an engineering I have acquired a set of technical and
            analytical skills that enable me to efficiently solve complex
            problems. I feel comfortable working with programming languages 
            and software development technologies, which allows me to quickly 
            adapt to different environments and projects.
          </p>

          <div className="flex flex-row justify-start mt-10">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-6">
            {tabData.find((t) => t.id === tab).content}
          </div>
          <Link href={"/resume"}>
            <div className="relative group">
              <button className="relative z-10 flex items-center justify-center bg-primary-500 text-white font-semibold rounded-full w-9/12 lg:w-1/2 py-2 px-4 mt-10 lg:mt-14 mb-16 mx-auto">
                See more
              </button>
              <div className="absolute inset-0 bg-primary-500 rounded-full blur opacity-75 w-9/12 lg:w-1/2 mx-auto transition duration-300 ease-in-out group-hover:blur-none"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
