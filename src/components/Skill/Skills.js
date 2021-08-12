import React, {useEffect, useContext} from 'react';
import Skill from './Skill';
import portfolioContext from '../../context/portfolioContext';
const Skills = () => {
    const portfoliosContext = useContext(portfolioContext);
    const {skillitem, obtenerSkill} = portfoliosContext;
    useEffect(() => {
        obtenerSkill();
    },[])
    if(!skillitem) return <h2>No hay ninguna skills</h2>;
    return (  
        <section className="section skills" id="skills">
            <h2 className="skills-title title">Skills</h2>
            <span className="skills-subtitle subtitle">My Personal skills</span>
            <div className="flex skills">
                    {skillitem.map(skillitem => (
                        <Skill
                            id = {skillitem.id}
                            icon={skillitem.icon}
                            name={skillitem.name}
                            description={skillitem.description}
                            s1 = {skillitem.s1}
                            pc1 = {skillitem.pc1}
                            s2 = {skillitem.s2}
                            pc2 = {skillitem.pc2}
                            ps = {skillitem.ps}
                        />
                    ))}
            </div>
        </section>
        
    );
}

export default Skills;