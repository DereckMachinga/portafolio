import React, {useReducer} from 'react';
import { props } from 'bluebird';
import portfolioReducer from './portfolioReducer';
import portfolioContext from './portfolioContext';

import { MENU_MOBILE, MENU_MOBILE_CLOSE} from '../types';


const PortfolioState = props => {
    //State inicial
    const initialState = {
        menu: false
    }
    //dispatch pra ejecutar acciones 
    const [state, dispatch] = useReducer(portfolioReducer, initialState);

    //Mostrar opciones del menu mobile 
    const mostrarMenu = () => {
        dispatch({
            type: MENU_MOBILE
        })
    }
    const ocultarMenu = () => {
        dispatch({
            type: MENU_MOBILE_CLOSE
        })
    }

    return(
        <portfolioContext.Provider
            value={{ 
                menu: state.menu,
                mostrarMenu,
                ocultarMenu
            }}
        >
            {props.children}
        </portfolioContext.Provider>
    );
}

export default PortfolioState;