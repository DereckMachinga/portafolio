import React,{Fragment, useContext} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import Menu from './Menu/Menu';
import MenuMobile from './Menu/MenuMobile';
import portfolioContext from '../context/portfolioContext';
const Header = () => {
    //Obtener el state del menu mobile
    const portfoliosContext = useContext(portfolioContext);
    //Extraer el menu mobile del context
    const {menu, mostrarMenu, ocultarMenu} = portfoliosContext;
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
return ( 

        <header className="nav">
                <div className="nav_logo">
                    <Link to="presentation" smooth={true} offset={-100} duration={300} className="logo"
                        onClick= {() => scrollToTop }
                    >Dereck</Link>
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
        
    );
}

export default Header;