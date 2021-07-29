import React from 'react';
import {Link} from 'react-router-dom';
const Menu = () => {
    return ( 
        <div className="nav-menu">
                    <ul className="nav-menu-list">
                        <li className="nav-menu-item"><Link to={'./presentacion'} className="nav-link"><i className="uil uil-estate nav-icon"></i>Home</Link></li>
                        <li className="nav-menu-item"><Link to={'./sobre'} className="nav-link"><i className="uil uil-user nav-icon"></i>Sobre Mi</Link></li>
                        <li className="nav-menu-item"><a href="#!" className="nav-link"><i className="uil uil-file nav-icon"></i>Skills</a></li>
                        <li className="nav-menu-item"><a href="#!" className="nav-link"><i className="uil uil-bag-alt nav-icon"></i>Services</a></li>
                        <li className="nav-menu-item"><a href="#!" className="nav-link"><i className="uil uil-image-v nav-icon"></i>Portfolio</a></li>
                        <li className="nav-menu-item"><a href="#!" className="nav-link"><i className="uil uil-message nav-icon"></i>Contact me</a></li>
                    </ul>
        </div>
    );
}

export default Menu;