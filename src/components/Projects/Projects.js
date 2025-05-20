/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Project1",
    description:
      "For future purposes",
    url: "https://gher-com.vercel.app",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Project2",
    description:
      "For future purposes",
    url: "https://goalpulse.vercel.app",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Project3",
    description:
      "For future purposes",
    url: "https://buildkhalafat.com",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Project4",
    description:
      "For future purposes",
    url: "https://roomista.netlify.app",
    category: "frontend",
  },
  {
    id: 5,
    title: "Project5",
    description:
      "For future purposes",
    url: "https://thefitclub-web.netlify.app",
    category: "frontend",
  },
  {
    id: 6,
    title: "Project6",
    description:
      "For future purposes",
    url: "https://colorcraft-web.netlify.app/",
    category: "frontend",
  },
];

const Projects = () => {
  const projectsNav = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter((project) => project.category === item.name)
      );
    }
  }, [item]);
  return (
    <section className="section portfolio__projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>
      <div>
        <div className="projects__filters">
          {projectsNav.map((navText, index) => {
            return (
              <span
                className={
                  item.name === navText
                    ? "active__filters-item projects__filters-item"
                    : "projects__filters-item"
                }
                key={index}
                onClick={() => setItem({ name: navText })}
              >
                {navText}
              </span>
            );
          })}
        </div>
        <div className="projects__container container grid">
          {projects.map(({ id, title, url, description }) => {
            return (
              <div class="card" key={id}>
                <div class="content">
                  <div class="h6">{title}</div>
                  <p>{description}</p>
                  <a href={url} target="_blank" className="project__button">
                    Demo{" "}
                    <i className="bx bx-right-arrow-alt project__button-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
