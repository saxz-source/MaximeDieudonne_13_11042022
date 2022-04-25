/**
 * Check if the user is logged
 * @returns {boolean}
 */
export const isUserLogged = () => {
    return (state) => {
        return state.user.isLogged;
    };
};

/**
 * Get the userr name
 * @returns {{firstName : string, lastName:string}}
 */
export const getUserName = () => {
    return (state) => {
        return {
            firstName: state.user.name,
            lastName: state.user.lastName,
        };
    };
};


/**
 * Get the userr name
 * @returns {{firstName : string, lastName:string}}
 */
 export const getUser = () => {
    return (state) => {
        return state.user
    };
};
