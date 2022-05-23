import API from "./API";
import { userActions } from "../features/user.slice";
import {errorsActions}  from "../features/error.slice";

// Get the store once the app stack is compiling
let store;
export const injectStore = (_store) => {
    store = _store;
};

// Set up the interceptor to disconnect user if unauthorized
API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (!error.response) {
            if (store)
                store.dispatch(
                    errorsActions.setErrorForUser({
                        errorText:
                            "Serveur injoignable, vérifiez votre connexion internet",
                    })
                );
        }
        if (!error.response.status === 500) {
            if (store)
                store.dispatch(
                    errorsActions.setErrorForUser({
                        errorText:
                            "Une erreur est survenue, veuillez réssayer plus tard",
                    })
                );
        }
        if (error.response.status === 401) {
            if (store) store.dispatch(userActions.logOutUser());
        }
        return error;
    }
);

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
    });
};

/**
 * Fetch the user Names
 * @returns {Promise<{firstName:string, lastName:string}>}
 */
export const fetchUser = async (token) => {
    // Add token to the headers
    const APICall = API;
    APICall.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // Execute call
    return APICall({
        method: "POST",
        url: "user/profile",
    });
};

/**
 * Update user name
 * @param {string} token
 * @returns {Promise<{firstName:string, lastName:string}>}
 */
export const updateUserName = async (newNames) => {
    // Add token to the headers
    const APICall = API;
    APICall.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${localStorage.token}`;
    return APICall({
        method: "PUT",
        url: "user/profile",
        data: JSON.stringify(newNames),
    });
};
