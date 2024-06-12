export const transformCart = (dbCart) => ({
	cartId: dbCart.id,
	userId: dbCart.user_id,
	confectionId: dbCart.confection_id,
	count: dbCart.count,
	price: dbCart.price,
});