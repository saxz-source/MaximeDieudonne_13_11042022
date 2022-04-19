import { createSlice } from "@reduxjs/toolkit";

//export const userLogin = createAction('user/login')

const { actions, reducer } = createSlice({
    name: "user",
    initialState: {
        id: null,
        firstName: null,
        lastName : null,
        isLogged: false,
        token: null,
    },
    reducers: {
        updateUserConnexion: (state, action) => {
            state.token = action.payload;
            state.isLogged = true;
        },

    },
});

export const { updateUserConnexion } = actions;
export default reducer;
