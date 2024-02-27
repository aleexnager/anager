"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectTag from "../../components/ProjectTag";
import SearchTool from "./SearchTool";
import InfHorizontalScroll from "./InfHorizontalScroll";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../../projectsData/projectsData";
import { categories } from "../../lib/constants";

const ProjectsCarousel = () => {
  const [tags, setTags] = useState(["All"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    if (newTag === "All") {
      setTags(["All"]);
    } else if (tags.includes(newTag)) {
      setTags(tags.filter((tag) => tag !== newTag));
      if (tags.length === 1) {
        // only "All" tag is selected
        setTags(["All"]);
      }
    } else {
      setTags(tags.filter((tag) => tag !== "All").concat(newTag));
    }
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.some((tag) => tags.includes(tag))
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const [areTagsVisible, setAreTagsVisible] = useState(false);

  const handleVisibilityToggle = () => {
    setAreTagsVisible(!areTagsVisible);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-4xl font-bold text-white py-2 px-4">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Projects
          </span>
        </h2>

        <SearchTool />
      </div>

      <div className="relative group my-8">
        <button
          onClick={handleVisibilityToggle}
          className="relative my-6 lg:my-8 py-2 px-8 md:px-12 xl:px-16 flex items-center justify-center bg-primary-500 text-white font-semibold rounded-full"
        >
          <span className="z-10">
            {areTagsVisible ? "Hide Categories" : "Show Categories"}
          </span>
          <div className="absolute inset-0 bg-primary-500 rounded-full blur opacity-75 transition duration-300 ease-in-out group-hover:blur-none"></div>
        </button>
      </div>

      {areTagsVisible && (
        <div className="text-white flex flex-wrap justify-center items-center gap-2 pb-6 lg:pb-8">
          {categories.map((category) => (
            <ProjectTag
              onClick={handleTagChange}
              name={category.name}
              isSelected={tags.includes(category.name)}
            />
          ))}
        </div>
      )}

      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={`${tags}-${index}`}
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
              svgs={project.svgs}
            />
          </motion.li>
        ))}
      </ul>

      <div className="py-16 my-16">
        <InfHorizontalScroll />
      </div>
    </section>
  );
};

export default ProjectsCarousel;
