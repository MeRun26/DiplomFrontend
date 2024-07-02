const initialConfectionsState = {
    // confectionId: '',
    // name: '',
    // description: '',
    // confectionImage: '',
    // price: '',
};

export const confectionsReducer = (state = initialConfectionsState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_CONFECTIONS_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};