import "./App.css";

export function SkillList() {
    interface Skill {
        name: string;
        category: string;
    }

    function MakeSkill({ name, category }: Skill) {
        return (
            <div className="skill-category">
                <h4>{category}</h4>
                <span className='skillBoxes'>{name}</span>
            </div>
        );
    }

    const skills: Skill[] = [
        // Languages
        { name: "Python", category: "Languages" },
        { name: "JavaScript/TypeScript", category: "Languages" },
        { name: "C++", category: "Languages" },
        { name: "Java", category: "Languages" },
        { name: "HTML", category: "Languages" },
        { name: "CSS", category: "Languages" },
        { name: "Lua", category: "Languages" },

        // Machine Learning
        { name: "TensorFlow", category: "Machine Learning" },
        { name: "PyTorch", category: "Machine Learning" },
        { name: "Scikit-learn", category: "Machine Learning" },
        { name: "NumPy", category: "Machine Learning" },
        { name: "Pandas", category: "Machine Learning" },
        { name: "Data Augmentation", category: "Machine Learning" },
        { name: "CNNs", category: "Machine Learning" },

        // Web Development
        { name: "React", category: "Web Development" },
        { name: "Node.js", category: "Web Development" },
        { name: "Express.js", category: "Web Development" },
        { name: "FastAPI", category: "Web Development" },
        { name: "Vite", category: "Web Development" },
        { name: "REST APIs", category: "Web Development" },
        { name: "MongoDB", category: "Web Development" },
        { name: "Local Storage", category: "Web Development" },
        { name: "React Router DOM", category: "Web Development" },
        { name: "Tailwind CSS", category: "Web Development" },

        // Data Analysis & Finance
        { name: "Matplotlib", category: "Data Analysis & Finance" },
        { name: "Seaborn", category: "Data Analysis & Finance" },
        { name: "Data Visualization", category: "Data Analysis & Finance" },
        { name: "Financial Modeling", category: "Data Analysis & Finance" },

        // Tools
        { name: "Git", category: "Tools" },
        { name: "Docker", category: "Tools" },
        { name: "Linux", category: "Tools" },
        { name: "Celery", category: "Tools" },
        { name: "Redis", category: "Tools" },

        // Other
        { name: "Agile Methodology", category: "Other" },
        { name: "Data Modeling", category: "Other" },
        { name: "MLOps", category: "Other" },
        { name: "UI/UX Design", category: "Other" }
    ];

    const listItems = skills.map((skill) =>
        <MakeSkill name={skill.name} category={skill.category} key={skill.name} />
    );

    return (
        <div id='skill'>{listItems}</div>
    );
}
