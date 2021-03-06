import React, {useContext, Fragment, useState, useEffect} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import portfolioContext from '../../context/portfolioContext';
const MenuMobile = () => {
    //Extraer el contexto
    const portfoliosContext = useContext(portfolioContext);
    //extraer valores del contexto
    const {mode,menu, darkMode, lightMode, ocultarMenu} = portfoliosContext;
    const [cheked, setcheked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    useEffect(() => {
        document.getElementsByTagName("HTMl")[0].setAttribute("data-theme", localStorage.getItem("theme"));
    },[cheked]);
    const toggleThemeChange  =() => {
        if(cheked === false){
            localStorage.setItem("theme", "dark");
            lightMode();
            setcheked(true);
        }
        else{
            localStorage.setItem("theme","light");
            darkMode();
            setcheked(false);
        }
    }
    return ( 
        <Fragment>

            {menu ? 
                    (
                        <div className="nav-menu-mobile">
                                    <ul className="nav-menu-list-mobile">
                                        <li className="nav-menu-item-mobile"><Link to="presentation" smooth={true} offset={-100} duration={300} className="nav-link"
                                            onClick= {() =>ocultarMenu()}
                                        ><i className="uil uil-estate nav-icon"></i>Home</Link></li>
                                        <li className="nav-menu-item-mobile"><Link to="about" smooth={true} offset={0} duration={300} className="nav-link"
                                            onClick= {() =>ocultarMenu()}
                                        ><i className="uil uil-user nav-icon"></i>About Me</Link></li>
                                        <li className="nav-menu-item-mobile"><Link to="skills" smooth={true} offset={100} duration={300} className="nav-link"
                                            onClick= {() =>ocultarMenu()}
                                        ><i className="uil uil-file nav-icon"></i>Skills</Link></li>
                                        <li className="nav-menu-item-mobile"><Link to="portfolio" smooth={true} offset={-50} duration={300} className="nav-link"
                                            onClick= {() =>ocultarMenu()}
                                        ><i className="uil uil-image-v nav-icon"></i>Portfolio</Link></li>
                                        <li className="nav-menu-item-mobile"><Link to="contact" smooth={true} offset={270} duration={300} className="nav-link"
                                            onClick= {() =>ocultarMenu()}
                                        ><i className="uil uil-message nav-icon"></i>Contact me</Link></li>
                                        {mode  === 'light' ? 
                                            (
                                                <li className="nav-menu-item-mobile"
                                                    onClick= {() => toggleThemeChange()}
                                                >
                                                    <i className="uil uil-moon mode"></i>
                                                </li>
                                            )
                                            : 
                                            (
                                                <li className="nav-menu-item-mobile"
                                                    onClick= {() =>toggleThemeChange()}
                                                >
                                                    <i className="uil uil-sun mode"></i>
                                                </li>
                                            )}
                                    </ul>
                        </div>
                    )
                :
                    null
            }
        </Fragment>
    );
}

export default MenuMobile;