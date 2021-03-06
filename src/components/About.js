import React, {Fragment} from 'react';
import Perfil from '../img/about.jpg';
import CV from '../cv/CV_SANDOVAL_2021.pdf';
const About = () => {
    return ( 
        <section className="section about" id="about">
                <h2 className="title">About Me</h2>
                <span className="subtitle">My introduction</span>
            <div className="flex container about">
                <div className="about-img">
                    <img src={Perfil} alt="Imagen about" />
                </div>
                <div className="about-data">
                    <div className="about-description">
                        <p> 
                            Web developer, with extensive knowledge and year of experience, working in web technologies and UI / UX design, delivering quality work.
                        </p>    
                    </div>
                    <div className="about-info">
                        <div className="about-info-dt">
                            <span>01+</span>
                            <p>Years Experience</p> 
                        </div>
                        <div className="about-info-dt">
                            <span>10+</span>
                            <p>Completed Projects </p> 
                        </div>
                        <div className="about-info-dt">
                            <span>01+</span>
                            <p>Companies worked</p> 
                        </div>
                    </div>
                </div>
                <div className="about-btn">
                    <a href={CV} download className="btn btn-01">Download My CV <i className="uil uil-import"></i></a>
                </div>
                
            </div>
        </section>
      
    );
}

export default About;  