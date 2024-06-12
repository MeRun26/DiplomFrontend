import { ACTION_TYPE } from '../actions';
import { ROLE } from '../constants'

const initialUserState = {
    id: null,
    login: null,
    cart: null,
    orders: null,
    roleId: ROLE.GUEST,
    session: null,
};

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER:
            return {
                ...state,
                ...action.payload,
                roleId: action.payload.roleId, // Ensure roleId is mapped to roleId GPT

            };
        case ACTION_TYPE.LOGOUT:
            return initialUserState;
        default:
            return state;
    }
};