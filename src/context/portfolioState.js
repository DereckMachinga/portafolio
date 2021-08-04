import React, {useReducer} from 'react';
import { props } from 'bluebird';
import portfolioReducer from './portfolioReducer';
import portfolioContext from './portfolioContext';

import { MENU_MOBILE, 
    MENU_MOBILE_CLOSE,
    DARK_MODE,
    LIGHT_MODE, 
    SKILLS_OPEN,
    SKILLS_CLOSE,
    OBTENER_SKILL,
    SKILL_ACTUAL
} from '../types';


const PortfolioState = props => {
    const skillitem= [
        {key: "1",icon:"uil uil-brackets-curly", name: "Frontend", description: "More than 4 years", s1: "html", pc1: "80%", s2: "css", pc2: "70%", ps: "one"},
        {key: "2",icon:"uil uil-server-network", name: "Backend", description: "More than 2 years", s1: "JavaScript", pc1: "80%", s2: "Php", pc2: "70%", ps: "three"},
        {key: "3",icon:"uil uil-chart-growth", name: "Designer", description: "More than 4 years", s1: "figma", pc1: "50%", s2: "Photoshop", pc2: "70%", ps: "one"}
    ]
    //State inicial
    const initialState = {
        menu: false,
        skillitem: [
            {key: "1",icon:"uil uil-brackets-curly", name: "Frontend", description: "More than 4 years", s1: "html", pc1: "80%", s2: "css", pc2: "70%", ps: "one"},
            {key: "2",icon:"uil uil-server-network", name: "Backend", description: "More than 2 years", s1: "JavaScript", pc1: "80%", s2: "Php", pc2: "70%", ps: "three"},
            {key: "3",icon:"uil uil-chart-growth", name: "Designer", description: "More than 4 years", s1: "figma", pc1: "50%", s2: "Photoshop", pc2: "70%", ps: "one"}
        ],
        mode: "light",
        skills: true,
        ski: null,
    }
    //dispatch pra ejecutar acciones 
    const [state, dispatch] = useReducer(portfolioReducer, initialState);

    const obtenerSkill = () => {
        dispatch({
            type: OBTENER_SKILL,
            payload: skillitem
        })
    }
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
    const mostrarSkills = skillKey  => {
        dispatch({
            type: SKILLS_OPEN,
            payload: skillKey
        })
    }
    const ocultarSkills = skillKey => {
        dispatch({
            type: SKILLS_CLOSE,
            payload: skillKey
        })
    }
    const SkillActual = skillKey => {
        dispatch({
            type: SKILL_ACTUAL,
            payload: skillKey
        })
    }
    return(
        <portfolioContext.Provider
            value={{ 
                menu: state.menu,
                mode: state.mode,
                skillitem: state.skillitem,
                skills: state.skills,
                ski: state.ski,
                mostrarMenu,
                ocultarMenu,
                darkMode,
                lightMode,
                mostrarSkills,
                ocultarSkills,
                obtenerSkill, 
                SkillActual
            }}
        >
            {props.children}
        </portfolioContext.Provider>
    );
}

export default PortfolioState;