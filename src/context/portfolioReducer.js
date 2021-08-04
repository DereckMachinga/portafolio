import {MENU_MOBILE,
    MENU_MOBILE_CLOSE,
    DARK_MODE,
    LIGHT_MODE,
    SKILLS_OPEN,
    SKILLS_CLOSE,
    OBTENER_SKILL,
    SKILL_ACTUAL
} from '../types';

export default(state, action) => {
    switch (action.type) {
        case MENU_MOBILE:
            return{
                ...state,
                menu: true
            }
        case MENU_MOBILE_CLOSE:
            return {
                ...state,
                menu: false
            }
        case DARK_MODE:
            return {
                ...state,
                mode: "dark"
            }
        case LIGHT_MODE:
            return {
                ...state,
                mode: "light"
            }
        case SKILLS_OPEN:
            return {
                ...state,
                skills: true
            }
        case SKILLS_CLOSE:
            return {
                ...state,
                skillitem: state.skillitem.filter(skill => skill.key !== action.payload),
                skills: false
            }
        case OBTENER_SKILL:
            return{
                ...state,
                skillitem: action.payload 
            }
        case SKILL_ACTUAL:
            return{
                ...state,
                ski: state.skillitem.filter(skill => skill.key === action.payload)
            }
        default:
            return state;
        
    }


}