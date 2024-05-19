// import { ACTION_TYPE } from '../actions';
// import { ROLE } from '../constants';

const initialBasketState = {
    // id: null,
    // login: null,
    // basket: null,
    // orders: null,
    // roleId: ROLE.GUEST,
    // session: null,
};

export const basketReducer = (state = initialBasketState, action) => {
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
