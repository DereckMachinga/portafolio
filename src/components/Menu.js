import React from 'react';
import {Link} from 'react-router-dom';
const Menu = () => {
    return ( 
        <div className="nav-menu">
                    <ul className="nav-menu-list">
                        <li className="nav-menu-item"><Link to={'./presentacion'} className="nav-link">Home</Link></li>
                        <li className="nav-menu-item"><Link to={'./sobre'} className="nav-link">Sobre Mi</Link></li>
                        <li className="nav-menu-item"><a href="#!" className="nav-link">Home</a></li>
                        <li className="nav-menu-item"><a href="#!" className="nav-link">Home</a></li>
                        <li className="nav-menu-item"><a href="#!" className="nav-link">Home</a></li>
                        <li className="nav-menu-item"><a href="#!" className="nav-link">Home</a></li>
                    </ul>
        </div>
    );
}

export default Menu;