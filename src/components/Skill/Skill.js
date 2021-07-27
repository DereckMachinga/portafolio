import React from 'react';

const Skill = ({icon,name, description, s1, pc1, s2, pc2,ps}) => {
    return ( 
        <div className={`skills-content ${ps}`}>
                        <div className="skills-header">
                            <i className={`${icon} skills-icon`}></i>
                            <div className="skills-m">
                                <h2 className="skills-titles">{name}</h2>
                                <span className="skills-subtitle">{description}</span>
                            </div>
                            <i className="uil uil-angle-down skills-arrow"></i>
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
                        
                    </div>
    );
}

export default Skill;