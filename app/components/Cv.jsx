"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Cv = () => {
  return (
    <section>
      <div>
        <h3 className="flex justify-center font-bold text-xl">
          Let&apos;s build something together
        </h3>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring", stiffness: 150 }}
          className="flex justify-center text-primary-500 font-bold text-4xl mt-4 mb-4"
        >
          Resume
        </motion.h2>
        <Link
          href={""}
          className="flex justify-center hover:text-primary-500 hover:underline"
        >
          <p>INFOGRAPHIC MODEL AVAILABLE!</p>
        </Link>
        <div className="flex flex-row justify-between items-center bg-[#33353F] rounded-md mt-10 mb-10">
          <h1 className="font-semibold text-xl ml-4 mt-2 mb-2 mr-8">
            Alejandro Náger
          </h1>
          <div className="flex flex-row gap-3 mr-4 mt-2 mb-2">
            <Link href={""}>
              <svg
                className="w-[36px] h-[36px] bg-transparent text-white hover:text-primary-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/alejandro-náger-95b1791b7/">
              <svg
                className="w-[36px] h-[36px] bg-transparent text-white hover:text-primary-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" />
                <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
              </svg>
            </Link>
            <Link href="https://github.com/aleexnager">
              <svg
                className="w-[36px] h-[36px] bg-transparent text-white hover:text-primary-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" />
              </svg>
            </Link>
          </div>
        </div>

        <h1 className="flex justify-center font-semibold text-xl underline mb-3">
          TEAM WORK | COMPLEX PROBLEM SOLVING | QUICK LEARNER
        </h1>
        <p className="mb-6">
          &nbsp;Based in Madrid, Spain. 22 year old highly motivated computer
          science engineer that enjoys developing open source code and web
          projects. I have the ambition of becoming an industry expert as the
          head of my team.
        </p>

        <h1 className="flex justify-center font-semibold text-xl underline mb-3">
          Skills
        </h1>
        <p className="mb-2">
          <b>Technical Skills</b> | Front (React, NodeJS, JavaScript,
          TypeScript) | Back (Java, Python, Typescript, C, Bash) | DevOps (AWS,
          Docker)
        </p>
        <p className="mb-6">
          <b>Soft Skills</b> | Comunication with teammates | Presentations to
          large audiences | R&D vision
        </p>

        <h1 className="flex justify-center font-semibold text-xl underline mb-3">
          Education
        </h1>
        <p className="mb-2">
          <b>
            <em>Universidad Politecnica de Madrid</em>
          </b>
          <br />
          <em>Student</em>, Computer Science Engineering
          <br />
          &nbsp;Currently studying at Madrid and focused on finishing my
          Bachelor's degreeand I will pursue a Master's degree in Cybersecurity.
        </p>
        <p className="mb-2">
          <b>
            <em>Cambridge Assesment English</em>
          </b>
          <br />
          <em>Advanced C1</em>
          <br />
          &nbsp;Advanced english language official certificate from Cambridge
          School.
        </p>
        <p className="mb-6">
          <b>
            <em>International Baccalaureate (IB)</em>
          </b>
          <br />
          <em>IB diploma</em>
          <br />
          &nbsp;International Baccalaureate diploma obtained in Mirabal
          International School where I studied until my graduation
        </p>

        <h1 className="flex justify-center font-semibold text-xl underline mb-3">
          Professional Experience
        </h1>
        <p className="mb-6">
          &nbsp;To this day my only experiences are part-time jobs which doesn't
          really have to do this area. I'm motivated and willing to work.
          <br /> Help me get me get my first real job!
        </p>
      </div>
    </section>
  );
};

export default Cv;
