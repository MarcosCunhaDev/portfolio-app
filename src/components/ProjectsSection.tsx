"use client";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";

interface Project {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    imgUrl: "/images/projects/1.png",
    tag: ["all", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    imgUrl: "/images/projects/2.png",
    tag: ["all", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    imgUrl: "/images/projects/3.png",
    tag: ["all", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    imgUrl: "/images/projects/4.png",
    tag: ["all", "mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    imgUrl: "/images/projects/1.png",
    tag: ["all", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "FullStack  Roadmap",
    description: "Project 6 description",
    imgUrl: "/images/projects/6.png",
    tag: ["all", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
];

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const handleChangeTag = (tag: string) => {
    setSelectedFilter(tag);
  };

  const filteredProjects = projectsData.filter((projectData) => {
    return projectData.tag.includes(selectedFilter);
  });

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {filters.map((filter) => {
          return (
            <ProjectTag
              key={filter.id}
              label={filter.label}
              onClick={() => handleChangeTag(filter.id)}
              isSelected={selectedFilter === filter.id}
            />
          );
        })}
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
