import {MENU_MOBILE, MENU_MOBILE_CLOSE} from '../types';

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
    }


}