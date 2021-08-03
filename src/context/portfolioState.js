import React, {useReducer} from 'react';
import { props } from 'bluebird';
import portfolioReducer from './portfolioReducer';
import portfolioContext from './portfolioContext';

import { MENU_MOBILE, 
    MENU_MOBILE_CLOSE,
    DARK_MODE,
    LIGHT_MODE
} from '../types';


const PortfolioState = props => {
    //State inicial
    const initialState = {
        menu: false,
        mode: "light"
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
    const darkMode = () => {
        dispatch({
            type: DARK_MODE
        })
    }
    const lightMode = () => {
        dispatch({
            type: LIGHT_MODE
        })
    }
    return(
        <portfolioContext.Provider
            value={{ 
                menu: state.menu,
                mode: state.mode,
                mostrarMenu,
                ocultarMenu,
                darkMode,
                lightMode
            }}
        >
            {props.children}
        </portfolioContext.Provider>
    );
}

export default PortfolioState;