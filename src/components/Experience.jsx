import { useState } from "react";

export default function Experience({ experience, experienceId }){

    const [ toggleResps, setToggleResps ] = useState(false); 

    return(
        <div className="experience-container" key={experienceId}>

            <div className="experience-top">
                <h4><span className="position">{experience.position}</span> - <span className="companyName">{experience.company_name}</span></h4>
                <span className="smallText">{experience.date}</span>
            </div>

            <div className="experience-main">
                <h6>{experience.description}</h6>
                <div className="p-2 row gap-2">{experience.used_technologies.map(skill => <span className="usedTechnology col-auto">{skill}</span>)}</div>
            </div>

            <div className="experience-footer">

                <span id="responsibilities" onClick={() => setToggleResps(!toggleResps)}>
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