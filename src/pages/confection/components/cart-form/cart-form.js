import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch/*, useSelector*/ } from 'react-redux';
import { Button, Layout } from '../../../../components';
// import { Comment } from './components';
// import { selectUserRole } from '../../../../selectors';
import { addCartAsync } from '../../../../actions';
// import { PROP_TYPE, ROLE } from '../../../../constants';
import styled from 'styled-components';

const CartFormContainer = ({ className, cart, confectionId }) => {
	const [count, setCount] = useState(0);
	// 	const userRole = useSelector(selectUserRole);
	const dispatch = useDispatch();
	// const addToCart = (confectionId, count) => {
	// 	// 		dispatch(addCommentAsync(postId, content));
	// 	dispatch(addCartAsync(confectionId, count));
	// 	setCount(0);
	// };

	// 	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			<Layout
				size="20px"
				border="1px solid #000"
				radius="12px"
				margin="0 0 20px"
				height="48px"
				width="50px"
			>{count}</Layout>
			<div>
				<Button
					size="20px"
					width="30px"
					height="25px"
					margin="0 0 0 10px"
					onClick={() => setCount(+1)}

				>+</Button>
				<Button
					size="20px"
					width="30px"
					height="25px"
					margin="0 0 0 10px"
					onClick={() => setCount(-1)}

				>-</Button>
			</div>

			<Button
				id="fa-paper-plane-o"
				margin="0 0 0 10px"
				size="20px"
				radius="20px"
				// width="150px"
				height="50px"
				// onClick={() => addToCart(confectionId, count)}
			>
				Add to Cart
			</Button>
		</div>
	);
};

export const CartForm = styled(CartFormContainer)`
 		display: flex;
 `;

// Comments.propTypes = {
// 	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
// 	postId: PropTypes.string.isRequired,
// };