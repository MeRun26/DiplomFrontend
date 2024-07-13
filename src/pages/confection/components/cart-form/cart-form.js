import { useState } from "react";
// import PropTypes from 'prop-types';
// import { useDispatch/*, useSelector*/ } from 'react-redux';
import { Button, Layout } from "../../../../components";
// import { Comment } from './components';
// import { selectUserRole } from '../../../../selectors';
// import { addCartAsync } from '../../../../actions';
// import { PROP_TYPE, ROLE } from '../../../../constants';
import styled from "styled-components";

const CartFormContainer = ({ className, cart, confectionId }) => {
	const [count, setCount] = useState(1);
	// 	const userRole = useSelector(selectUserRole);
	// const dispatch = useDispatch();
	// const addToCart = (confectionId, count) => {
	// 	// 		dispatch(addCommentAsync(postId, content));
	// 	dispatch(addCartAsync(confectionId, count));
	// 	setCount(0);
	// };

	// 	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			<Layout className="quick-shop" size="20px">
				Quick Shop
			</Layout>

			<div className="edit-cart">
				<Layout className="count-display">{count}</Layout>
				<div className="edit-buttons">
					<Button
						size="10px"
						width="50px"
						height="20px"
						margin="0 0 0 10px"
						radius="10px"
						onClick={() => setCount((prev) => prev + 1)}
					>
						+
					</Button>
					<Button
						size="10px"
						width="50px"
						height="20px"
						margin="5px 0 0 10px"
						radius="10px"
						onClick={() => setCount((prev) => (prev <= 1 ? prev : prev - 1))}
					>
						-
					</Button>
				</div>
				<Button className="add-to-cart">Add to Cart</Button>
			</div>
			<Layout className="total-price" family="Roboto Slab">
				items - TotalPrice
			</Layout>

			<Button className="back-to-store">Back to Store</Button>
		</div>
	);
};

export const CartForm = styled(CartFormContainer)`
	width: 100%;
	margin: 10px 0 0 150px;
	max-width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	.quick-shop {
		font-size: 30px;
	}

	.count-display {
		font-size: 20px;
		border: 1px solid #000;
		border-radius: 12px;
		margin: 0 0 0 10px;
		height: 50px;
		width: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.edit-cart {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.add-to-cart {
		font-size: 20px;
		height: 50px;
		width: 160px;
	}

	.back-to-store {
		font-size: 20px;
		height: 50px;
		width: 100%;
	}

	.total-price {
		font-size: 20px;
		border: 1px solid #000;
		border-radius: 12px;
		margin: auto;
		height: 50px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

// Comments.propTypes = {
// 	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
// 	postId: PropTypes.string.isRequired,
// };
