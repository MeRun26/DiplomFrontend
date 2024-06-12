import { setConfectionData } from './set-confection-data';

export const loadConfectionAsync = (requestServer, confectionId) => (dispatch) => {
    requestServer('fetchConfection', confectionId).then((confectionData) => {
        // if (confectionData.res) {
        dispatch(setConfectionData(confectionData.res));
        // }
        // return confectionData;
    });
};
