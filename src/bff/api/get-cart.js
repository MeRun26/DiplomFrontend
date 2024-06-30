// import { transformCart } from '../transformers';

// export const getCart = async (cartId) =>

//     fetch(`http://localhost:3005/carts/${cartId}`)
//         .then((res) => {
//             if (res.ok) {
//                 return res;
//             }

//             const error =
//                 res.status === 404
//                     ? 'Такая страница не существует'
//                     : 'Что-то пошло не так. Попробуйте еще раз позднее';
//             return Promise.reject(error);
//         })

//         .then((loadedCart) => loadedCart.json())
//         .then((loadedCart) => loadedCart && transformCart(loadedCart));
// get-cart.js
import { transformCart } from '../transformers';

export const getCart = async (cartId) => {
    try {
        const response = await fetch(`http://localhost:3005/carts/${cartId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const cartData = await response.json();
        return transformCart(cartData);
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
};