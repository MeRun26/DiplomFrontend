// import { /*useNavigate*/ } from 'react-router-dom';
// // import { /*SpecialPanel*/ } from '../special-panel/special-panel';
// import styled from 'styled-components';
// // import { PROP_TYPE } from '../../../../constants';

// const CartItemContainer = ({
// 	className,
// 	cart: { cartId, userId, confectionId, count, price },
// }) => {
// 	console.log(cartId, "cartId")

// 	// const navigate = useNavigate();
// 	// вопросы 1) как получить изделия в корзине такие как картина и названеи и количество

// 	return (
// 		<div className={className}>
// 			{/* <img src={confectionImage} alt={name} /> */}
// 			<div className='confection-text'>{userId}</div>
// 			<div className='confection-text'>{confectionId}</div>
// 			<div className='confection-text'>{count}</div>
// 			<div>{price}</div>
// 		</div>
// 	);
// };

// export const CartItem = styled(CartItemContainer)`
// 	/* & img {
// 		float: left;
// 		margin: 0 20px 0px 0;
// 		height: 350px;
// 		width: 350px;
// 	}

// 	& .confection-text {
// 		font-size: 18px;
// 		white-space: pre-line;
// 	}
// 	 	& .buttons {
//  		display: flex;
// 	}

// 	& .cofection-property {

// 	}

// 	& .special-panel {
// 		display: flex;
// 		justify-content: space-between;
// 		font-size: 18px;
// 		margin: -20px 0 20px;
// 	} */
// `;

// // ConfectionContent.propTypes = {
// // 	post: PROP_TYPE.POST.isRequired,
// // };


import styled from 'styled-components';

// Компонент для отображения отдельного товара в корзине
const CartItemContainer = ({ className, item }) => {
	return (
		<div className={className}>
			<img src={item.confectionImage} alt={item.name} />
			<div className="item-details">
				<div className="item-name">{item.name}</div>
				<div className="item-description">{item.description}</div>
				<div className="item-count">Количество: {item.count}</div>
				<div className="item-price">Цена: {item.price}</div>
			</div>
		</div>
	);
};

export const CartItem = styled(CartItemContainer)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }

  & .item-details {
    display: flex;
    flex-direction: column;
  }

  & .item-name,
  .item-description,
  .item-count,
  .item-price {
    margin: 5px 0;
  }
`;
