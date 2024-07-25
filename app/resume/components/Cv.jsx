"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Cv = () => {
  const downloadCVInf = () => {
    const pdfURL = "/docs/Alejandro Náger CV infográfico.pdf"; // URL del archivo PDF
    const link = document.createElement("a"); // Crea un enlace temporal
    link.href = pdfURL;
    link.download = "Alejandro Náger CV infográfico.pdf"; // Nombre del archivo que se descargará
    link.click();
  };

  const downloadCV = () => {
    const pdfURL = "/docs/Alejandro Náger CV.pdf"; // URL del archivo PDF
    const link = document.createElement("a"); // Crea un enlace temporal
    link.href = pdfURL;
    link.download = "Alejandro Náger CV.pdf"; // Nombre del archivo que se descargará
    link.click();
  };

  return (
    <section id="about" className="lg:mx-10">
      <div className="lg:mx-10">
        <h3 className="flex justify-center font-bold text-xl lg:text-2xl">
          Let&apos;s build something together
        </h3>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring", stiffness: 150 }}
          className="flex justify-center font-bold text-5xl my-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Resume
          </span>
        </motion.h1>
        <Link
          href={""}
          className="flex justify-center hover:text-primary-500 hover:underline lg:text-xl"
        >
          <motion.button
            onClick={downloadCVInf}
            whileTap={{ scale: 0.7 }}
            transition={{ scale: { duration: 0.2 } }}
          >
            <p>INFOGRAPHIC MODEL AVAILABLE!</p>
          </motion.button>
        </Link>
        <div className="flex flex-row justify-between items-center bg-[#33353F] rounded-md my-10 lg:my-12 p-2">
          <h1 className="font-semibold text-2xl lg:text-3xl ml-4 lg:ml-6 my-2 mr-8">
            Alejandro Náger
          </h1>
          <div className="flex flex-row gap-3 mr-4 lg:mr-6 my-2">
            <button onClick={downloadCV}>
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
            </button>
            <Link href="https://www.linkedin.com/in/anager/">
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

        <h1 className="flex justify-center font-semibold text-2xl lg:text-3xl underline mb-4 lg:mb-6">
          About Me
        </h1>
        <p className="mb-9 lg:text-lg lg:mb-12">
          &nbsp;&nbsp;&nbsp;&nbsp;Based in Madrid, Spain. 22 year old highly
          motivated computer science engineer that enjoys developing open source
          code and web projects. I have the ambition of becoming an industry
          expert as the head of my team.
        </p>

        <h1 className="flex justify-center font-semibold text-2xl lg:text-3xl underline mb-4 lg:mb-6">
          Technical Skills
        </h1>
        <p className="mb-3 lg:text-lg">
          <b>Programming Languages:</b> Java, JavaScript, C, C#, Python, SQL,
          HTML, CSS.
        </p>
        <p className="mb-3 lg:text-lg">
          <b>Technologies/Frameworks:</b> NEXT.js, .NET Core, Entity Framework,
          Git, AWS, Docker.
        </p>
        <p className="mb-9 lg:text-lg lg:mb-12">
          <b>Developer Tools:</b> Visual Studio Code, IntelliJ IDEA, Eclipse,
          GitHub, GitLab, Postman API.
        </p>

        <h1 className="flex justify-center font-semibold text-2xl lg:text-3xl underline mb-4 lg:mb-6">
          Non-Technical Skills
        </h1>
        <p className="mb-9 lg:text-lg lg:mb-12">
          <b>Soft Skills:</b> Comunication with teammates | Presentations to
          large audiences | R&D vision | Quick Learner.
        </p>

        <h1 className="flex justify-center font-semibold text-2xl lg:text-3xl underline mb-3">
          Education
        </h1>
        <p className="mb-3 lg:text-lg">
          <b>Universidad Politecnica de Madrid</b>
          <br />
          <em>Student, Computer Science Engineering</em>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Currently studying at Madrid and focused on
          finishing my Bachelor's degree and I will pursue a master's degree in
          Cybersecurity.
        </p>
        <p className="mb-3 lg:text-lg">
          <b>Cambridge Assessment English</b>
          <br />
          <em>Advanced C1</em>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Advanced english language official certificate
          from Cambridge School.
        </p>
        <p className="mb-9 lg:text-lg lg:mb-12">
          <b>International Baccalaureate (IB)</b>
          <br />
          <em>IB diploma</em>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;International Baccalaureate diploma obtained
          in Mirabal International School (Madrid, Spain) where I studied until
          my graduation.
        </p>

        <h1 className="flex justify-center font-semibold text-2xl lg:text-3xl underline mb-4 lg:mb-6">
          Professional Experience
        </h1>
        <p className="mb-3 lg:text-lg">
          &nbsp;&nbsp;&nbsp;&nbsp;I have experience as a Full Stack Software
          Engineer working with .NET. Here I learnd about databases, web
          management and teamworking. I would love to start working as a
          cybersecurity engineer as soon as I finish my bachelor studies.
        </p>
        <p className="mb-9 lg:text-lg lg:mb-12">
          &nbsp;&nbsp;&nbsp;&nbsp;Apart from that I&apos;ve done many projects
          in order to obtain personal experience and learn about modern
          technologies. You can check them out{" "}
          <Link
            href={"../projects"}
            className="underline font-semibold hover:text-primary-500"
          >
            here
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Cv;
