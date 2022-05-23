/**
 * Check if the user is logged
 * @returns {boolean}
 */
export const isUserLogged = () => {
    return (state) => {
        return state.user.user.isLogged;
    };
};

/**
 * Return the user auth token
 * @returns {string}
 */
export const loginRequestStatus = () => {
    return (state) => {
        return state.user.token;
    };
};

/**
 * Get the userr name
 * @returns {{firstName : string, lastName:string}}
 */
export const getUserName = () => {
    return (state) => {
        return {
            firstName: state.user.user.firstName,
            lastName: state.user.user.lastName,
        };
    };
};

/**
 * Get the user state
 * @returns {{firstName : string, lastName:string}}
 */
export const getUser = () => {
    return (state) => {
        return state.user.user;
    };
};

