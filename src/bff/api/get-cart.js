import { transformCart } from "../transformers";

export const getCart = async (userId) =>
	fetch(`http://localhost:3005/carts?userId=${userId}`)
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			const error =
				res.status === 404
					? "Такая страница не существует"
					: "Что-то пошло не так. Попробуйте еще раз позднее";
			return Promise.reject(error);
		})
		.then((loadedCart) => loadedCart.json())
		.then((loadedCart) => loadedCart && transformCart(loadedCart));
