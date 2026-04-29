import { useState } from "react"

export default function Experience({ experience, experienceId }){

    const [ toggleResps, setToggleResps ] = useState(false); 

    return(
        <div className="experience-container" key={experienceId}>

            <div className="experience-top">
                <div className="experience-end">
                    <span className="smallText">{experience.date}</span>
                    <h4>{experience.position} - {experience.company_name}</h4>
                    <h6>{experience.description}</h6>
                    <div className="row">{experience.used_technologies.map(skill => <span className="usedTechnology col-auto">{skill}</span>)}</div>
                </div>
            </div>

            <div className="experience-end">

                <span id={`responsibilities ${toggleResps ? 'active' : ''}`} onClick={() => setToggleResps(!toggleResps)}>
                    {toggleResps ? 'HIDE' : 'KEY RESPONSIBILITIES'} <span className={`arrow ${toggleResps ? 'active' : ''}`}>
                    <i class="fa-solid fa-angle-down"></i></span>
                </span>

                <div className={toggleResps ? 'collapsed' : 'collapse'} >
                    <ul>
                        {experience.responsibilities.map(resp => <li>{resp}</li>)}
                    </ul>
                </div>

            </div>

        </div>
    );
};