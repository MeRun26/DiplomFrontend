// update-cart.js
export const updateCart = async (cartId, items) => {
    try {
        const response = await fetch(`http://localhost:3005/carts/${cartId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedCart = await response.json();
        return transformCart(updatedCart);
    } catch (error) {
        console.error('Error updating cart:', error);
        throw error;
    }
};