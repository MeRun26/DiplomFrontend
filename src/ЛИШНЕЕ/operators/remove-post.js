import { deletePost, getComments, deleteComment } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removePost = async (hash, id) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: 'null',
		};
	}

	const comments = await getComments(id);

	await Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));

	await deletePost(id);

	return {
		error: null,
		res: true,
	};
};
