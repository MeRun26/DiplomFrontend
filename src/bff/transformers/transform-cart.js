export const transformCart = (dbCart) => ({
	id: dbCart.id,
	userId: dbCart.userId,
	createdAt: dbCart.createdAt,
	items: dbCart.items.map((item) => ({
		id: item.id,
		cartId: item.cartId,
		confectionId: item.confectionId,
		count: item.count,
		price: item.price,
		addedAt: item.addedAt,
	})),
	count: dbCart.items.reduce((acc, item) => acc + item.count, 0),
	totalPrice: dbCart.items.reduce(
		(acc, item) => acc + item.price * item.count,
		0,
	),
});
