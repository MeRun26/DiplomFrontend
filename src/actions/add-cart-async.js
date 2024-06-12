import { setConfectionData } from './set-confection-data';

export const addCartAsync = (requestServer, userId, confectionId, count) => (dispatch) => {

    requestServer('addCart', userId, confectionId, count).then((confectionData) => {
        dispatch(setConfectionData(confectionData.res));
    });
};
