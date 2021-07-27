import React from 'react';
import Skill from './Skill';

const Skills = () => {
    return (  
        <div className="section">
            <h2 className="skills-title">Skills</h2>
            <span className="skills-subtitle">My Personal skills</span>
            <div className="flex skills">
                    <Skill
                        icon="uil uil-brackets-curly"
                        name="Fronted"
                        description="More than 4 years"
                        s1 = "html"
                        pc1 = "80%"
                        s2 = "css"
                        pc2 = "70%"
                        ps = "one"
                    />
                    <Skill
                        icon="uil uil-server-network"
                        name="Backend"
                        description="More than 2 years"
                        s1 = "JavaScript"
                        pc1 = "80%"
                        s2 = "Php"
                        pc2 = "70%"
                        ps = "three"
                        />
                    <Skill
                        icon="uil uil-chart-growth"
                        name="Designer"
                        description="More than 4 years"
                        s1 = "figma"
                        pc1 = "50%"
                        s2 = "Photoshop"
                        pc2 = "70%"
                        ps = "one"
                    />
            </div>
        </div>
    );
}

export default Skills;