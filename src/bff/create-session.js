import { removeConfection } from './session/remove-confection'
import { ROLE } from '../constants/role';

export const createSession = (roleId) => {
    const session = {
        logout() {
            Object.keys(session).forEach((key) => {
                delete session[key];
            });
        },
    }

    switch (roleId) {
        case ROLE.ADMIN: {
            session.removeConfection = removeConfection;
            break;
        }
        case ROLE.MODER: {
            session.removeConfection = removeConfection;
            break;
        }
        case ROLE.USER: {
            break;
        }
        default:
        //do nothing
    }
    return session;
}
