import { /*useNavigate*/ } from 'react-router-dom';
// import { /*SpecialPanel*/ } from '../special-panel/special-panel';
import styled from 'styled-components';
// import { PROP_TYPE } from '../../../../constants';

const CartItemContainer = ({
	className,
	cart: { cartId, userId, confectionId, count, price },
}) => {
	console.log(cartId, "cartId")

	// const navigate = useNavigate();
	// вопросы 1) как получить изделия в корзине такие как картина и названеи и количество

	return (
		<div className={className}>
			{/* <img src={confectionImage} alt={name} /> */}
			<div className='confection-text'>{userId}</div>
			<div className='confection-text'>{confectionId}</div>
			<div className='confection-text'>{count}</div>
			<div>{price}</div>
		</div>
	);
};

export const CartItem = styled(CartItemContainer)`
	/* & img {
		float: left;
		margin: 0 20px 0px 0;
		height: 350px;
		width: 350px;
	}

	& .confection-text {
		font-size: 18px;
		white-space: pre-line;
	}
	 	& .buttons {
 		display: flex;
	}

	& .cofection-property {

	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		margin: -20px 0 20px;
	} */
`;

// ConfectionContent.propTypes = {
// 	post: PROP_TYPE.POST.isRequired,
// };
