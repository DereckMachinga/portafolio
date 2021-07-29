import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Presentation from './Presentation'
const Header = () => {
return ( 
    <Router>
        <header className="nav">
                <div className="nav_logo">
                    <Link to={'./presentacion'} className="logo">Dereck</Link>
                </div>
                    <Menu/>
                    <i class="uil uil-times-circle nav-close"></i>
                    <div className="nav_icons">
                        <i class="uil uil-apps nav-open"></i>
                    </div>
        </header>
        <Switch>
            <Route path="./presentacion" component={Presentation}></Route>
            <Route path="./sobre" component={About}></Route>
        </Switch>
    </Router>
    );
}

export default Header;