import { ACTION_TYPE } from '../actions';
// import { ROLE } from '../constants';

const initialCartState = {
    cartId: "",
    userId: "",
    confectionId: "",
    count: "",
    price: ""

    // carts: [],
    // loading: false,
    // error: null
};


export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_CART_DATA:

            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
        // case ACTION_TYPE.FETCH_CART_REQUEST:
        //     return {
        //         ...state,
        //         loading: true,
        //         error: null
        //     };
        // case ACTION_TYPE.FETCH_CART_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         cart: action.payload
        //     };
        // case ACTION_TYPE.FETCH_CART_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.error
        //     };
    }
};