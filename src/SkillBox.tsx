import "./App.css";

export function SkillList() {
    interface Skill {
        name: string;
    }
    function MakeSkill({ name }: Skill) {
        return (<div><span key={name} className='skillBoxes'>{name}</span></div>);
    }

    const skills = [
        "Python", "JavaScript/TypeScript", "C++", "Java", "HTML", "CSS", "Lua",
        "TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas",
        "React", "Node.js", "Express.js", "FastAPI", "Vite", "REST APIs", "MongoDB",
        "Matplotlib", "Seaborn", "Data Visualization", "Financial Modeling",
        "Git", "Docker", "Linux", "Celery", "Redis",
        "Agile Methodology", "Data Modeling", "MLOps", "UI/UX Design"
    ];

    const listItems = skills.map((txt) =>
        <MakeSkill name={txt.toString()} key={txt.toString()} />
    );

    return (
        <div id='skill'>{listItems}</div>
    );
}
