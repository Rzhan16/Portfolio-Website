import "./App.css";

export function SkillList() {
    interface Skill {
        name: string;
    }
    function MakeSkill({ name }: Skill) {
        return (<div><span key={name} className='skillBoxes'>{name}</span></div>);
    }

    const skills = [
        "HTML", "CSS", "Python", "C++", "C#", "JavaScript", "TypeScript", "React", "Java", "Lua", "Racket", 
        "Ubuntu", "Platform.io", "Bazel", "Git", "Unity", "Firebase", "Roblox Studio", "Node.js", "Express.js", "MongoDB",
        "Inventor", "Fusion 360", "TinkerCAD", "Ultimaker Cura", "Fritzing"
    ];

    const listItems = skills.map((txt) =>
        <MakeSkill name={txt.toString()} key={txt.toString()} />
    );

    return (
        <div id='skill'>{listItems}</div>
    );
}
