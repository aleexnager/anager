"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>C</li>
        <li>Java</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad Politecnica de Madrid (UPM)</li>
        <li>Cambridge Assesment English, Advance C1 </li>
        <li>International Baccalaurate (IB)</li>
      </ul>
    ),
  },
  {
    title: "Experience/Certifications",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          To this day my only experiences are part-time jobs which doesn&apos;t
          really have to do this area. I&apos;m motivated and willing to work
        </li>
        <li>Help me get me get my first real job!</li>
      </ul>
    ),
  },
];

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
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/la-rana-gustavo.jpg"
          alt="la rana gustavo"
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
            As an engineer student I have acquired a set of technical and
            analytical skills that enable me to efficiently solve complex
            problems. And as a computer science student I feel comfortable
            working with programming languages and software development
            technologies, which allows me to quickly adapt to different
            environments and projects.
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
              Experience/Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-6">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
