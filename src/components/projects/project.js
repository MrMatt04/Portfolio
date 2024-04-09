import React from "react";
import "./project.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Project = () => {
  return (
    <section id="projects">
      <h2 className="projectTitle">My finished projects</h2>
      <span className="projectDesc">
        I do not have many projects done just now but there will be more ^w^
      </span>
      <div className="projectImgs">
        <img src={portfolio1} alt="" className="projectImg" />
        <img src={portfolio2} alt="" className="projectImg" />
        <img src={portfolio3} alt="" className="projectImg" />
        <img src={portfolio4} alt="" className="projectImg" />
        <img src={portfolio5} alt="" className="projectImg" />
        <img src={portfolio6} alt="" className="projectImg" />
      </div>
      <button className="projectBtn">
        <a target="blank" href="https://github.com/MrMatt04">
          See more
        </a>
      </button>
    </section>
  );
};

export default Project;
