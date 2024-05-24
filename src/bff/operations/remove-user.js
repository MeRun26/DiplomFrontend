import { deleteUser } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removeUser = async (/*hash,*/ userSession, userId) => {
	const accessRoles = [ROLE.ADMIN];

	// const access = await sessions.access(hash, accessRoles);

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: 'null',
		};
	}

	deleteUser(userId);

	return {
		error: null,
		res: true,
	};
};