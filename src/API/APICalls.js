import API from "./API";

/**
 * Send the login informations and get the user token
 * @param {{email : string, password:string}} payload
 * @returns {Promise<string>}
 */
export const logIn = async (payload) => {
    return API({
        method: "POST",
        url: "user/login",
        data: payload,
    })
        .then((res) => {
            if (res.status === 200 && res.data.body.token)
                return res.data.body.token;
        })
        .catch((err) => console.log(err));
};

/**
 * Festch the user Names
 * @returns {Promise<{firstName:string, lastName:string}>}
 */
export const fetchUserName = async () => {
    // Add token to the headers
    const APICall = API;
    APICall.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${localStorage.token}`;
    // Execute call
    return APICall({
        method: "POST",
        url: "user/profile",
    })
        .then((res) => {
            const { firstName, lastName } = res.data.body;
            if (res.status === 200 && firstName && lastName) {
                return (res = {
                    firstName,
                    lastName,
                });
            }
            return;
        })
        .catch((err) => console.log(err));
};

/**
 * Update user name
 * @param {string} token
 * @returns {Promise<{firstName:string, lastName:string}>}
 */
export const updateUserName = async (newNames) => {
    const APICall = API;
    APICall.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${localStorage.token}`;
    return APICall({
        method: "PUT",
        url: "user/profile",
        data: JSON.stringify(newNames),
    })
        .then((res) => {
            if (res.status === 200) {
                return res;
            }
            return;
        })
        .catch((err) => console.log(err));
};
