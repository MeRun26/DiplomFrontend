// import { ACTION_TYPE } from '../actions';

const initialCategoryState = {
    // id: null,
    // login: null,
    // cart: null,
    // roleId: ROLE.GUEST,
    // session: null,
};

export const categoryReducer = (state = initialCategoryState, action) => {
    switch (action.type) {
        // case ACTION_TYPE.SET_CATEGORY_DATA:
        //     return {
        //         ...state,
        //         ...action.payload,
        //     };
        default:
            return state;
    }
};