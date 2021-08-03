import {MENU_MOBILE,
    MENU_MOBILE_CLOSE,
    DARK_MODE,
    LIGHT_MODE
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
    }


}