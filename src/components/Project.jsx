export default function Project({ project, projectId }){
    return(
        <div className="project-container" key={projectId}>
            <div className="project-start">
                <img src={project.image} alt="project image container" />
            </div>
            <div className="project-end">
                <h4>{project.title}</h4>
                <h6>{project.desc}</h6>
                <div className="row">{project.usedTech.map(tech => <span className="usedTechnology col-auto">{tech}</span> )}</div>
                <button><i class="fa-brands fa-github"></i> View on GitHub</button>
            </div>
        </div>
    )
}