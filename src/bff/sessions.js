// import { getSession, addSession, deleteSession } from './api';

export const sessions = {
	list: {},
	create(user) {
		const hash = Math.random().toFixed(50);

		this.list[hash] = user;

		// 	addSession(hash, user);

		return hash;
	},

	remove(hash) {
		delete this.list[hash];
	},

	access(hash, accessRoles) {
		const user = this.list[hash];

		return !!user && accessRoles.includes(user.roleId);
	}

	// async remove(hash) {
	// 	const session = await getSession(hash);

	// 	if (!session) {
	// 		return;
	// 	}

	// 	deleteSession(session.id);
	// },

	// async access(hash, accessRoles) {
	// 	const dbSession = await getSession(hash);

	// 	return !!dbSession?.user && accessRoles.includes(dbSession.user.roleId);
	// },
};
