import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import portfolioContext from '../../context/portfolioContext';
const MenuMobile = () => {
    //Extraer el contexto
    const portfoliosContext = useContext(portfolioContext);
    //extraer valores del contexto
    const {mode, darkMode, lightMode} = portfoliosContext;
    return ( 
        <div className="nav-menu-mobile">
                    <ul className="nav-menu-list-mobile">
                        <li className="nav-menu-item-mobile"><Link to={'./presentacion'} className="nav-link"><i className="uil uil-estate nav-icon"></i>Home</Link></li>
                        <li className="nav-menu-item-mobile"><Link to={'./sobre'} className="nav-link"><i className="uil uil-user nav-icon"></i>About Me</Link></li>
                        <li className="nav-menu-item-mobile"><a href="#!" className="nav-link"><i className="uil uil-file nav-icon"></i>Skills</a></li>
                        <li className="nav-menu-item-mobile"><a href="#!" className="nav-link"><i className="uil uil-bag-alt nav-icon"></i>Services</a></li>
                        <li className="nav-menu-item-mobile"><a href="#!" className="nav-link"><i className="uil uil-image-v nav-icon"></i>Portfolio</a></li>
                        <li className="nav-menu-item-mobile"><a href="#!" className="nav-link"><i className="uil uil-message nav-icon"></i>Contact me</a></li>
                        {mode  === 'light' ? 
                            (
                                <li className="nav-menu-item-mobile"
                                    onClick= {() => darkMode()}
                                >
                                    <i className="uil uil-moon mode"></i>
                                </li>
                            )
                            : 
                            (
                                <li className="nav-menu-item-mobile"
                                    onClick= {() =>lightMode()}
                                >
                                    <i className="uil uil-sun mode"></i>
                                </li>
                            )}
                    </ul>
        </div>
    );
}

export default MenuMobile;