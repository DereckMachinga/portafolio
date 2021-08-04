import React, {useContext,Fragment} from 'react';
import portfolioContext from '../../context/portfolioContext';
const Skill = ({key,icon,name, description, s1, pc1, s2, pc2,ps}) => {
    const portfoliosContext = useContext(portfolioContext);
    const {skills, SkillActual, ocultarSkills} = portfoliosContext;
    const accionesSkill = () => {
        SkillActual(key);
        ocultarSkills(key);
    }
    return ( 
        <div className={`skills-content ${ps}`}>
            { skills ? 
            (
                <Fragment>
                    <div className="skills-header"
                        onClick={() =>accionesSkill()}
                    >
                        <i className={`${icon} skills-icon`}></i>
                        <div className="skills-m">
                            <h2 className="skills-titles">{name}</h2>
                            <span className="skills-subtitle">{description}</span>
                        </div>
                        {skills ? (
                            <i className="uil uil-angle-down skills-arrow"></i>
                        ) : (
                            <i className="uil uil-arrow-down"></i>
                        )}
                    </div>
                    <div className="skills-list">
                        <div className="skills-data">
                            <div className="skills-titles">
                                <h4 className="skills-name">{s1}</h4>
                                <span className="skills-number">{pc1}</span>
                            </div>
                            <div className="skills-bar">
                                <span className={`skills-percentage skills-${s1}`}></span>
                            </div>
                        </div>
                        <div className="skills-data">
                            <div className="skills-titles">
                                <h4 className="skills-name">{s2}</h4>
                                <span className="skills-number">{pc2}</span>
                            </div>
                            <div className="skills-bar">
                                <span className={`skills-percentage skills-${s2}`}></span>
                            </div>
                        </div>
                    </div>    
                </Fragment>
            ) 
            : 
                null 
                
            }
        </div>
    );
}

export default Skill;