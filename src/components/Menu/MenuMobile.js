import React from 'react';
import {Link} from 'react-router-dom';
const MenuMobile = () => {
    return ( 
        <div className="nav-menu-mobile">
                    <ul className="nav-menu-list-mobile">
                        <li className="nav-menu-item-mobile"><Link to={'./presentacion'} className="nav-link"><i className="uil uil-estate nav-icon"></i>Home</Link></li>
                        <li className="nav-menu-item-mobile"><Link to={'./sobre'} className="nav-link"><i className="uil uil-user nav-icon"></i>About Me</Link></li>
                        <li className="nav-menu-item-mobile"><a href="#!" className="nav-link"><i className="uil uil-file nav-icon"></i>Skills</a></li>
                        <li className="nav-menu-item-mobile"><a href="#!" className="nav-link"><i className="uil uil-bag-alt nav-icon"></i>Services</a></li>
                        <li className="nav-menu-item-mobile"><a href="#!" className="nav-link"><i className="uil uil-image-v nav-icon"></i>Portfolio</a></li>
                        <li className="nav-menu-item-mobile"><a href="#!" className="nav-link"><i className="uil uil-message nav-icon"></i>Contact me</a></li>
                    </ul>
        </div>
    );
}

export default MenuMobile;