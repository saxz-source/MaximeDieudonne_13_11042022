import API from "./API";

export const logIn = (payload) => {
    API({
        payload,
        method: "POST",
        url: "user/login",
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
