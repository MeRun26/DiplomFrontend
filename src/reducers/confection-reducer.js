import { ACTION_TYPE } from '../actions';
// import { ROLE } from '../constants';

const initialConfectionState = {
    confectionId: '',
    name: '',
    description: '',
    confectionImage: '',
    price: '',
};

export const confectionReducer = (state = initialConfectionState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_CONFECTION_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
