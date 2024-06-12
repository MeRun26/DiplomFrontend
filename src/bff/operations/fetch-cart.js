import { getCart } from '../api';

export const fetchCart = async (cartId) => {
    const cart = await getCart(cartId);

    return {
        error: null,
        res: cart,
        // res: {
        // 	...confection,
        // 		comments: commentsWithAuthor,
        // },
    };
}
