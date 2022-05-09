export const addHeader_Authorization = (API) => {
    const APISettings = (API.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${localStorage.token}`);

    return APISettings;
};
