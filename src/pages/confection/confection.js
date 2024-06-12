import { useEffect /*, useLayoutEffect, useState*/ } from 'react';
import {/* useMatch, */useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ConfectionContent, CartForm } from './components';
// // import { Error, PrivateContent } from '../../components';
import { /*RESET_POST_DATA,*/ loadConfectionAsync } from '../../actions';
import { selectConfection } from '../../selectors';
// // import { ROLE } from '../../constants';
// // import { H2 } from '../../components';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';

const ConfectionContainer = ({ className }) => {
	const confection = useSelector(selectConfection);
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest()
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

		dispatch(loadConfectionAsync(requestServer, params.confectionId))
		// .then((confectionData) => {
		// 	setError(postData.error);
		// 	setIsLoading(false);
		// });
	}, [dispatch, params.confectionId, requestServer/*isCreating*/]);

	return (
		<div className={className}>
			<ConfectionContent confection={confection} />
			<CartForm /*carts={carts}/>*/ />
		</div>
	)

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
`;
