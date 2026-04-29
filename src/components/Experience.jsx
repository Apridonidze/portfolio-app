export default function Experience({experience}){
    return(
        <div className="experience-container">
            <div className="experience-top">
                <div className="experience-end">
                    <span className="smallText">{experience.date}</span>
                    <h4>{experience.position} - {experience.company_name}</h4>
                    <h6>{experience.description}</h6>
                    <div className="row">{experience.used_technologies.map(skill => <span className="usedTechnology col-auto">{skill}</span>)}</div>
                </div>
            </div>
            <div className="experience-end">
                <span id="collapse">KEY RESPONSIBILITIES</span>
                <div className="collapse" >
                    <ul>
                        {experience.responsibilities.map(resp => <li>{resp}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}