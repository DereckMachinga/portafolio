import React, {useContext, useState, useEffect} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import portfolioContext from '../../context/portfolioContext';
const Menu = () => {
    //Extraer el contexto
    const portfoliosContext = useContext(portfolioContext);
    //Extraer valores del contexto
    const {mode, darkMode, lightMode} = portfoliosContext;

    const [cheked, setcheked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    useEffect(() => {
        document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    },[cheked]);

    const toggleThemeChange = () => {
        if (cheked === false) {
            localStorage.setItem("theme", "dark");
            lightMode();
            setcheked(true);
        }
        else {
            localStorage.setItem("theme", "light");
            setcheked(false);
            darkMode();
        }
    }
    return ( 
        <div className="nav-menu">
                    <ul className="nav-menu-list">
                        <li className="nav-menu-item"><Link to="presentation" smooth={true} offset={-100} duration={300} className="nav-link"><i className="uil uil-estate nav-icon"></i>Home</Link></li>
                        <li className="nav-menu-item"><Link to="about" smooth={true} offset={-90} duration={300} className="nav-link"><i className="uil uil-user nav-icon"></i>About Me</Link></li>
                        <li className="nav-menu-item"><Link to="skills" smooth={true} offset={-180} duration={300} className="nav-link"><i className="uil uil-file nav-icon"></i>Skills</Link></li>
                        <li className="nav-menu-item"><Link to="portfolio" smooth={true} offset={-100} duration={300} className="nav-link"><i className="uil uil-image-v nav-icon"></i>Portfolio</Link></li>
                        <li className="nav-menu-item"><Link to="contact" smooth={true} offset={-100} duration={300} className="nav-link"><i className="uil uil-message nav-icon"></i>Contact me</Link></li>
                        {mode === 'light' ?
                            (
                                <li className="nav-menu-item"
                                    onClick= {() => toggleThemeChange()}
                                ><i className="uil uil-moon mode"></i></li>
                            )
                        :
                        (
                            <li className="nav-menu-item"
                                onClick= {() => toggleThemeChange()}
                            ><i className="uil uil-sun mode"></i></li>
                        )
                    }
                    </ul>
        </div>
    );
}

export default Menu;