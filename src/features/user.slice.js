import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    id: null,
    firstName: null,
    lastName: null,
    isLogged: false,
};

const { actions, reducer } = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        // log the user
        updateUserConnexion: (state, action) => {
            console.log(action.payload)
            const { token, rememberMe } = action.payload;
            if (token) {
                if (rememberMe) {
                    localStorage.setItem("token", token);
                }
            }
            state.isLogged = true;
        },
        // Add names to the user object
        setUserName: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        // disconnect the user
        logOutUser: (state, action) => {
            sessionStorage.removeItem("token");
            state.isLogged = false;
            state = initialUserState;
        },
    },
});

export const { updateUserConnexion, setUserName, logOutUser } = actions;
export default reducer;
