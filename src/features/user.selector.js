/**
 * Check if the user is logged
 * @returns {boolean}
 */
export const isUserLogged = () => {
    return (state) => {
        return state.user.isLogged;
    };
};
