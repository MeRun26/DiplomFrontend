// import { ACTION_TYPE } from '../actions';
// import { ROLE } from '../constants';

const initialConfectionState = {
    // id: null,
    // login: null,
    // basket: null,
    // orders: null,
    // roleId: ROLE.GUEST,
    // session: null,
};

export const confectionReducer = (state = initialConfectionState, action) => {
    switch (action.type) {
        // case ACTION_TYPE.SET_USER:
        //     return {
        //         ...state,
        //         ...action.payload,
        //     };
        // case ACTION_TYPE.LOGOUT:
        //     return initialUserState;
        default:
            return state;
    }
};
