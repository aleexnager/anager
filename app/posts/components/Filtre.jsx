import React, { useRef } from 'react'
import { projectsData } from "../projectsData";
import ProjectCard from "../../components/ProjectCard";

const Filtre = () => {
  const ref = useRef(null);
  
  return (
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
  )
}

export default Filtre