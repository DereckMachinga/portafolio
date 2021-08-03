import React from 'react';
import Skill from './Skill';
const Skills = () => {
    const itemsSkill = [
    {key: 1,icon:"uil uil-brackets-curly", name: "Frontend", description: "More than 4 years", s1: "html", pc1: "80%", s2: "css", pc2: "70%", ps: "one"},{key: 2,icon:"uil uil-server-network", name: "Backend", description: "More than 2 years", s1: "JavaScript", pc1: "80%", s2: "Php", pc2: "70%", ps: "three"},{key: 3,icon:"uil uil-chart-growth", name: "Designer", description: "More than 4 years", s1: "figma", pc1: "50%", s2: "Photoshop", pc2: "70%", ps: "one"}
    ];
    return (  
        <section className="section">
            <h2 className="skills-title title">Skills</h2>
            <span className="skills-subtitle subtitle">My Personal skills</span>
            <div className="flex skills">
                    {itemsSkill.map(item => (
                        <Skill
                            key = {item.key}
                            icon={item.icon}
                            name={item.name}
                            description={item.description}
                            s1 = {item.s1}
                            pc1 = {item.pc1}
                            s2 = {item.s2}
                            pc2 = {item.pc2}
                            ps = {item.ps}
                        />
                    ))}
            </div>
        </section>
    );
}

export default Skills;