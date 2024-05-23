import { setUserRole } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const updateUserRole = async (/*hash,*/ userSession, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	// const access = await sessions.access(hash, accessRoles);

	// if (!access) {
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: 'null',
		};
	}

	setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
