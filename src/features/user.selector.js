/**
 * Check if the user is logged
 * @returns {boolean}
 */
export const isUserLogged = () => {
    return (state) => {
        return state.user.user.isLogged;
    };
};


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
        return state.user.user
    };
};


export const getUserToken=()=>{
    return (state)=>{
        state.user.token.token
    }
}
