"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "This is project 1",
    image: "/images/projects/project1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is project 2",
    image: "/images/projects/project2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is project 3",
    image: "/images/projects/project3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is project 4",
    image: "/images/projects/project4.jpg",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "This is project 5",
    image: "/images/projects/project5.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "This is project 6",
    image: "/images/projects/project3.jpg",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <br />
      <br />
      <h2 className="text-center text-4xl font-bold text-white mt-12 mb-4 md:mt-16 md:mb-6">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
          Projects
        </span>
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={`${tag}-${index}`}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.3 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <Link href={"/projects"}>
        <div className="relative group">
          <button className="relative z-10 flex items-center justify-center bg-primary-500 text-white font-semibold rounded-full w-9/12 lg:w-3/12 py-2 px-4 mt-8 mb-16 mx-auto">
            See more
          </button>
          <div className="absolute inset-0 bg-primary-500 rounded-full blur opacity-75 w-9/12 lg:w-3/12 mx-auto transition duration-300 ease-in-out group-hover:blur-none"></div>
        </div>
      </Link>
    </section>
  );
};

export default ProjectsSection;
