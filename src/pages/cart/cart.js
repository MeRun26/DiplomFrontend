// // import { useState } from 'react';
// // import PropTypes from 'prop-types';
// // import { Icon } from '../../../../components';
// // import { Comment } from './components';
// // import { useServerRequest } from '../../../../hooks';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadCartAsync } from '../../actions';
// import { selectCart } from '../../selectors';
// import { useServerRequest } from '../../hooks';
// import { CartItem } from './components';
// // import { fetchCarts } from '../../actions';
// // import { PROP_TYPE, ROLE } from '../../../../constants';
// import { Button } from '../../components';
// import styled from 'styled-components';

// const CartContainer = ({ className }) => {
//     const dispatch = useDispatch();
//     const params = useParams();
//     const requestServer = useServerRequest()
//     const cart = useSelector(selectCart);
//     console.log(cart, "cart")

//     useEffect(() => {
//         dispatch(loadCartAsync(requestServer, params.cartId))

//     }, [dispatch, params.cartId, requestServer]);

//     // useEffect(() => {
//     //     dispatch(fetchCarts());
//     // }, [dispatch]);

//     // if (loading) return <p>Loading...</p>;
//     // if (error) return <p>Error: {error}</p>;

//     return (
//         <div className={className}>
//             <div>
//                 <h1>Cart</h1>

//                 <div className={className}>
//                     <CartItem cart={cart} />
//                 </div>
//             </div>
//             <Button>Оформить Заказ</Button>
//         </div>
//     );
// };

// export const Cart = styled(CartContainer)`
// // 	width: 580px;
// // 	margin: 0 auto;

// // 	& .new-comment {
// // 		display: flex;
// // 		width: 100%;
// // 		margin: 20px 0 0;
// // 	}

// // 	& .new-comment textarea {
// // 		width: 550px;
// // 		height: 120px;
// // 		font-size: 18px;
// // 		resize: none;
// // 	}
// `;

// // Comments.propTypes = {
// // 	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
// // 	postId: PropTypes.string.isRequired,
// // };



import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartAsync } from './actions';
import { selectCart } from './selectors';
import styled from 'styled-components';
import { CartItem } from './components/CartItem';
import { Button } from './components/Button';

// Основной компонент для отображения корзины
const CartContainer = ({ className }) => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart); // Получаем корзину из состояния Redux

    useEffect(() => {
        dispatch(loadCartAsync()); // Загружаем данные корзины при монтировании компонента
    }, [dispatch]);

    return (
        <div className={className}>
            <h1>Корзина</h1>
            {cart.items.map((item) => (
                <CartItem key={item.id} item={item} /> // Отображаем каждый товар в корзине
            ))}
            <Button>Оформить Заказ</Button>
        </div>
    );
};

export const Cart = styled(CartContainer)`
  /* Стили для компонента корзины */
`;
