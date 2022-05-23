/**
 * Select the errors state
 * @returns {{errorText : string, isError : boolean}}
 */
 export const selectErrors = () => {
    return (state) => {
        return state.error
    };
};