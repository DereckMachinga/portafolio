import React,{Fragment, useContext, useState} from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Menu from './Menu/Menu';
import MenuMobile from './Menu/MenuMobile';
import About from './About';
import Presentation from './Presentation';
import portfolioContext from '../context/portfolioContext';
const Header = () => {
    //Obtener el state del menu mobile
    const portfoliosContext = useContext(portfolioContext);
    //Extraer el menu mobile del context
    const {menu, mostrarMenu, ocultarMenu} = portfoliosContext;

return ( 
    <Router>
        <header className="nav">
                <div className="nav_logo">
                    <Link to={'./presentacion'} className="logo">Dereck</Link>
                </div>
                {menu ?
                    (
                        <Fragment>
                            <MenuMobile/>
                            <div className="nav_icons"
                                onClick= {()=> ocultarMenu()}
                            >
                                <i className="uil uil-times-circle nav-close"></i>
                            </div>
                        </Fragment>
                    )
                :
                        <Menu />
                }
                    <div className="nav_icons"
                        onClick= {()=> mostrarMenu()}
                    >
                        <i className="uil uil-apps nav-open"></i>
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