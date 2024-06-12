import { getConfection } from '../api';
// import { getPostCommentsWithAuthor } from '../utils';

export const fetchConfection = async (confectionId) => {
	// let confection;
	// let error;

	// try {
	const confection = await getConfection(confectionId);
	// } catch (confectionError) {
	// 	error = confectionError;
	// }

	// if (error) {
	// 	return {
	// 		error,
	// 		res: null,
	// 	};
	// }

	// const commentsWithAuthor = await getPostCommentsWithAuthor();

	return {
		error: null,
		res: confection,
		// res: {
		// 	...confection,
		// 		comments: commentsWithAuthor,
		// },
	};
};
