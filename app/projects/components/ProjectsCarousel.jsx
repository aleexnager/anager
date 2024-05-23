"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectTag from "../../components/ProjectTag";
import InfHorizontalScroll from "./InfHorizontalScroll";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../../posts/projectsData";
import { categories } from "../../lib/constants";

const ProjectsCarousel = () => {
  const [tags, setTags] = useState(["All"]);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesTags = project.tag.some((tag) => tags.includes(tag));
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTags && matchesSearch;
  });

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
        <div className="block py-6 mt-4 w-full md:w-1/2">
          <label htmlFor="topbar-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="topbar-search"
              className="bg-gray-50 border border-[#33353F] text-gray-900 text-sm rounded-full focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
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
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
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
              title={project.title}
              description={project.description}
              imgUrl={project.image}
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
