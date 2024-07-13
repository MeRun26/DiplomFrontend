import { setCartData } from "./set-cart-data";

export const loadCartAsync = (requestServer, userId) => (dispatch) => {
	requestServer("fetchCart", userId).then((cartData) => {
		// if (cartData) {
		dispatch(setCartData(cartData));
		// }
		// return cartData;
	});
};
