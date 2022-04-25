import { createSlice } from "@reduxjs/toolkit";

//export const userLogin = createAction('user/login')

const { actions, reducer } = createSlice({
    name: "user",
    initialState: {
        id: null,
        firstName: null,
        lastName: null,
        isLogged: false,
    },
    reducers: {
        // log the user
        updateUserConnexion: (state, action) => {
            sessionStorage.setItem("token", action.payload);
            //   state.token = action.payload;
            state.isLogged = true;
        },
        // Add names to the user object
        setUserName: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },
});

export const { updateUserConnexion, setUserName } = actions;
export default reducer;
