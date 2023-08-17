import React, { useState } from "react";
import "./main.css";
import ProjectPopup from "./ProjectPopup";
export default function ProjectCard(props) {
    const [showProject, setShowProject] = useState(false);
    const { imgSrc, title, skills, description } = props;
    return (
        <div className="project-item">
            <img
                className="project-image"
                src={`https://picsum.photos/id/${imgSrc}/1024/1024`}
                alt="project"
            />
            <button
                type="text"
                className="project-title"
                onClick={() => setShowProject(true)}
            >
                {title}
            </button>
            {showProject && (
                <ProjectPopup setShowProject={setShowProject} {...props} />
            )}
        </div>
    );
}