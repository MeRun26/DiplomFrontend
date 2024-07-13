import { useEffect /*, useLayoutEffect, useState*/ } from "react";
import { /* useMatch, */ useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ConfectionContent, CartForm } from "./components";
// // import { Error, PrivateContent } from '../../components';
import {
	/*RESET_POST_DATA,*/ loadConfectionAsync,
	loadCartAsync,
} from "../../actions";
import { selectConfection, selectCart } from "../../selectors";
// // import { ROLE } from '../../constants';
// // import { H2 } from '../../components';
import { useServerRequest } from "../../hooks";
import styled from "styled-components";

const ConfectionContainer = ({ className }) => {
	const confection = useSelector(selectConfection);
	const cart = useSelector(selectCart);
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	// 	const [error, setError] = useState(null);
	// 	const [isLoading, setIsLoading] = useState(true);
	// 	const isCreating = !!useMatch('/post');
	// 	const isEditing = !!useMatch('/post/:id/edit');

	// 	useLayoutEffect(() => {
	// 		dispatch(RESET_POST_DATA);
	// 	}, [dispatch, isCreating]);

	useEffect(() => {
		// if (isCreating) {
		// 	setIsLoading(false);
		// 	return;

		dispatch(loadConfectionAsync(requestServer, params.confectionId));
		// .then((confectionData) => {
		// 	setError(postData.error);
		// 	setIsLoading(false);
		dispatch(loadCartAsync(params.userId)); // Здесь предполагается, что userId есть в параметрах
		// });
	}, [
		dispatch,
		params.confectionId,
		params.userId,
		requestServer /*isCreating*/,
	]);

	return (
		<div className={className}>
			{/* <SearchByName /> */}
			<div className="content">
				<ConfectionContent confection={confection} />
			</div>
			<div className="cart-form">
				<CartForm cart={cart} />
			</div>
		</div>
	);

	// 	if (isLoading) {
	// 		return null;
	// 	}

	// 	const SpecificPostPage =
	// 		isCreating || isEditing ? (
	// 			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
	// 				<div className={className}>
	// 					<PostForm post={post} />
	// 				</div>
	// 			</PrivateContent>
	// 		) : (
	// 			<div className={className}>
	// 				<ConfectionContent confection={confection} />
	// 				<Comments comments={post.comments} postId={post.id} />
	// 			</div>
	// );

	// return error ? <Error error={error} /> : SpecificPostPage;
};

export const Confection = styled(ConfectionContainer)`
	margin: 0px 0;
	padding: 0 40px;
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	gap: 16px;
	padding: 0 40px;

	.content {
		grid-column: span 6;
	}

	.cart-form {
		grid-column: span 3;
	}
`;
