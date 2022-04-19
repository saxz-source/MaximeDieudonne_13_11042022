import API from "./API";

/**
 * 
 * @param {*} payload 
 * @returns 
 */
export const logIn = async (payload) => {
    console.log(payload);
    return API({
        method: "POST",
        url: "user/login",
        data: payload,
    })
        .then((res) => {
            if (res.status === 200 && res.data.body.token) return res.data.body.token;
        })
        .catch((err) => console.log(err));
};
