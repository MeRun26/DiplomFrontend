// delete-from-cart.js
export const deleteFromCart = async (cartId, confectionId) => {
    try {
        const response = await fetch(`http://localhost:3005/carts/${cartId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [{ confectionId, count: 0 }]
            })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedCart = await response.json();
        return transformCart(updatedCart);
    } catch (error) {
        console.error('Error deleting from cart:', error);
        throw error;
    }
};