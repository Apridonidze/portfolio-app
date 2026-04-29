export default function Skill({ title , skills }){
    return(
        <div className="skill-container">
            <div className="skill-title">{title}</div>
            <div className="skill-body">{skills.map((skill, skillId) => <span className="skill" key={skillId}>{skill}</span>)}</div>
        </div>
    );
};