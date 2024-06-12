import { setCartData } from './set-cart-data';

export const loadCartAsync = (requestServer, cartId) => (dispatch) => {
    requestServer('fetchCart', cartId).then((cartData) => {
        // if (cartData) {
        dispatch(setCartData(cartData));
        // }
        // return cartData;
    });
};
