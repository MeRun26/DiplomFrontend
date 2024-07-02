const initialCategoriesState = {
    // id: null,
    // login: null,
    // cart: null,
    // orders: null,
    // roleId: ROLE.GUEST,
    // session: null,
};

export const categoriesReducer = (state = initialCategoriesState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_CATEGORIES_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};