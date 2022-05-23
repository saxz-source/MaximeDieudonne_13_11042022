/**
 * Check if the user written mail corresponds to a mail structure
 * @param {string} mail
 * @returns {boolean}
 */
export const validMail = (mail) => {
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            mail
        )
    ) {
        return true;
    } else {
        return false;
    }
};
