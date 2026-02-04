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
    const pdfURL = "/docs/Alejandro\ Náger\ Fernández\ CV\ EN.pdf"; // URL del archivo PDF
    const link = document.createElement("a"); // Crea un enlace temporal
    link.href = pdfURL;
    link.download = "Alejandro Náger Fernández CV EN.pdf"; // Nombre del archivo que se descargará
    link.click();
  };

  return (
    <section id="about" className="lg:mx-10 text-white">
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
        {/*<Link
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
        </Link>*/}
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
          Professional Summary
        </h1>
        <p className="mb-9 lg:text-lg lg:mb-12">
          Cybersecurity professional with experience in risk analysis and
          management, IT auditing, and information security governance in
          complex corporate environments. Currently working as a Cybersecurity
          Risk Analyst at PwC, participating in projects aligned with regulatory
          frameworks such as ENS, NIST, ISO 27001, and NIS2 for high-profile
          clients. Possesses a strong technical background in full-stack .NET
          software development, enabling a deep understanding of systems,
          applications, and associated risks. Analytical profile, focused on
          continuous improvement and driven by academic specialization in
          cybersecurity.
        </p>

        <h1 className="flex justify-center font-semibold text-2xl lg:text-3xl underline mb-4 lg:mb-6">
          Work Experience
        </h1>
        <div className="mb-6 lg:text-lg">
          <b>Cybersecurity Risk Analyst</b>
          <br />
          <em>August 2025-Present</em>
          <br />
          <b>PricewaterhouseCoopers (PwC) - Community of Madrid, Spain</b>
          <ul className="list-disc pl-8 lg:pl-6 mt-1 space-y-2">
            <li>
              Cybersecurity risk analysis and management in complex
              environments, aligned with regulatory and compliance frameworks
              such as ENS, NIST, ISO 27001, NIS2, and Magerit.
            </li>
            <li>
              Participation in IT Governance, Risk & Compliance (GRC) projects,
              assessing security controls, process maturity, and regulatory
              compliance.
            </li>
            <li>
              Execution of IT audits and security assessments for large
              organizations, including clients such as Redeia and CORPME.
            </li>
            <li>
              Development of Threat & Vulnerability Management activities,
              threat analysis, and support in Cyber Threat Intelligence for
              strategic decision-making.
            </li>
            <li>
              Use of tools and languages such as PILAR, SQL, and Python for risk
              analysis, data processing, and task automation.
            </li>
            <li>
              Collaborative work in multidisciplinary teams, contributing to the
              preparation of executive and technical reports for different
              organizational levels.
            </li>
          </ul>
        </div>
        <div className="mb-9 lg:text-lg lg:mb-12">
          <b>Full Stack Software Engineer (.NET)</b>
          <br />
          <em>June 2024 - August 2025</em>
          <br />
          <b>NalCOM Servicios Informáticos - Community of Madrid, Spain</b>
          <ul className="list-disc pl-8 lg:pl-6 mt-1 space-y-2">
            <li>
              Development of full-stack web applications based on .NET
              technologies, applying MVC architectures and software engineering
              best practices.
            </li>
            <li>
              Implementation of backend functionalities using C# and Entity
              Framework, and frontend development with JavaScript, HTML5, CSS,
              and Bootstrap.
            </li>
            <li>
              Design and management of relational databases using Microsoft SQL
              Server, optimizing queries and data models.
            </li>
            <li>
              Participation in projects for clients in the pharmaceutical
              sector, such as Novo Nordisk, working in professional,
              business-oriented environments.
            </li>
            <li>
              Use of Azure DevOps Server for version control, task management,
              and continuous deployment.
            </li>
            <li>
              Teamwork following structured methodologies, with a focus on
              quality, maintainability, and compliance with technical
              requirements.
            </li>
          </ul>
        </div>

        <h1 className="flex justify-center font-semibold text-2xl lg:text-3xl underline mb-3">
          Education
        </h1>
        <ul>
          <li className="mb-3 lg:text-lg">
            <b>
              <em>Master's Degree Student in Cybersecurity</em>
            </b>
            <br />
            <em>Complutense University of Madrid (UCM)</em>
            <br />
            Currently studying at Madrid while working for PwC and focused on
            finishing my Master's degree in defensive and offensive
            cybersecurity.
          </li>
          <li className="mb-3 lg:text-lg">
            <b>Bachelor's Degree in Computer Engineering</b>
            <br />
            <em>Polythechnic University of Madrid (UPM)</em>
            <br />
            Graduated as a Computer Engineer at UPM, where I developed my final
            project on steganography and learned advanced programming and
            engineering concepts.
          </li>
          <li className="mb-3 lg:text-lg">
            <b>Cambridge Assessment English</b>
            <br />
            <em>Advanced C1</em>
            <br />
            Advanced english language official certificate from Cambridge
            School.
          </li>
          <li className="mb-9 lg:text-lg lg:mb-12">
            <b>International Baccalaureate (IB)</b>
            <br />
            <em>IB diploma</em>
            <br />
            International Baccalaureate diploma obtained in Mirabal
            International School (Madrid, Spain) where I studied until my
            graduation.
          </li>
        </ul>

        <h1 className="flex justify-center font-semibold text-2xl lg:text-3xl underline mb-4 lg:mb-6">
          Technical Skills
        </h1>
        <p className="mb-3 lg:text-lg">
          <b>Programming Languages:</b> Python, C, C#, Java, JavaScript, SQL.
        </p>
        <p className="mb-3 lg:text-lg">
          <b>Technologies/Frameworks:</b> NEXT.js, Node.js, .NET Core, Entity
          Framework, Git, AWS, Docker.
        </p>
        <p className="mb-9 lg:text-lg lg:mb-12">
          <b>Tools:</b> Wireshark, Nmap, Metasploit, Burp Suite, SQLMap, John
          the Ripper, Aircrack-ng,Hydra, Tennable.
        </p>

        <h1 className="flex justify-center font-semibold text-2xl lg:text-3xl underline mb-4 lg:mb-6">
          Non-Technical Skills
        </h1>
        <p className="mb-9 lg:text-lg lg:mb-12">
          <b>Soft Skills:</b> Comunication with teammates | Presentations to
          large audiences | R&D vision | Quick Learner.
        </p>
      </div>
    </section>
  );
};

export default Cv;
