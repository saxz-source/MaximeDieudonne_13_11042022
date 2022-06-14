export const handleUserRemembering = (rememberMe, token) => {
    if (rememberMe) {
        localStorage.setItem("token", `${token}`);
    } else {
        localStorage.removeItem("token");

        sessionStorage.setItem("token", `${token}`);
    }
};

export const removeTokenFromStorage = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
};

export const getTokenFromStorage = () => {
    const token = localStorage.token
        ? localStorage.token
        : sessionStorage.token
        ? sessionStorage.token
        : null;
    return token;
};
