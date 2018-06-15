<<<<<<< 2f4aedc5a102c7d8e9ef3453c1c0b41c0452c6de
const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                hodor: action.hodor
            };
        default:
            return state;
    }
}
=======
const initialState = {
    user: {},
    isAuth: false,
    profile: {}
};

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isAuth: Object.keys(action.user).length > 0,
                user: action.user
            };

        default:
            return state;
    }
}
>>>>>>> Added in redux stuff for authUser and Users and hooked it up to Questionnaire component
