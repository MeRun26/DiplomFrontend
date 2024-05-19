import { ACTION_TYPE } from './action-type';
import { server } from '../bff';

export const logout = (
    // userSession
    session
) => {
    server.logout(
        // userSession
        session
    );
    return {
        type: ACTION_TYPE.LOGOUT
    };
};
