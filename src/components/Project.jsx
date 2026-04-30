export default function Project({ project, projectId }){
    return(
        <div className="project-container" key={projectId}>
            <div className="project-start">
                <img src={project.image} alt="project image container" />
            </div>
            <div className="project-end">
                <h4>{project.title}</h4>
                <h6>{project.desc}</h6>
                <div className="row gap-2 my-2 px-2">{project.usedTech.map(tech => <span className="usedTechnology col-auto">{tech}</span> )}</div>
                <button onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")} className="githubBtn btn mt-2 w-100"><i className="fa-brands fa-github"></i> View on GitHub</button>
            </div>
        </div>
    );
};