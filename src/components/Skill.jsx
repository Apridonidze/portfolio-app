export default function Skill({ title , skills }){
    return(
        <div className="skill-container p-4">
            <h6 className="skill-title text-uppercase">{title}</h6>
            <div className="row p-1 gap-2 px-2">{skills.map((skill, skillId) => <span className="skill col-auto" key={skillId}>{skill}</span>)}</div>
        </div>
    );
};