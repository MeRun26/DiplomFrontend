// import { generateDate } from '../utils';

// export const addCart = (userId, confectionId, count, price) =>
// 	fetch('http://localhost:3005/carts', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json;charset=utf-8',
// 		},
// 		body: JSON.stringify({
// 			userId: userId,
// 			confectionId: confectionId,
// 			count: count,
// 			price: price,
// 		}),
// 	});

// add-to-cart.js
export const addToCart = async (cartId, confectionId, count) => {
    try {
        const response = await fetch(`http://localhost:3005/carts/${cartId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [{ confectionId, count }]
            })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedCart = await response.json();
        return transformCart(updatedCart);
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
};