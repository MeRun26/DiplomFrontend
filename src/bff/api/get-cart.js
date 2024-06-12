import { transformCart } from '../transformers';

export const getCart = async (cartId) =>

    fetch(`http://localhost:3005/carts/${cartId}`)
        .then((res) => {
            if (res.ok) {
                return res;
            }

            const error =
                res.status === 404
                    ? 'Такая страница не существует'
                    : 'Что-то пошло не так. Попробуйте еще раз позднее';
            return Promise.reject(error);
        })

        .then((loadedCart) => loadedCart.json())
        .then((loadedCart) => loadedCart && transformCart(loadedCart));