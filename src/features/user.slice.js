import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logIn, updateUserName, fetchUser } from "../API/APICalls";

const initialUserState = {
    token: {
        loading: false,
        error: null,
        token: null,
    },
    user: {
        loading: false,
        error: false,
        id: null,
        firstName: null,
        lastName: null,
        isLogged: false,
    },
};

/**
 * @returns {AsyncThunk<>}
 */
export const logInRequest = createAsyncThunk(
    "user/logInRequest",
    async (data) => {
        const response = await logIn(data);
        return response.data.body;
    }
);

export const fetchUserRequest = createAsyncThunk(
    "user/fetchUserRequest",
    async (data) => {
        const response = await fetchUser(data);
        return response.data.body;
    }
);

export const modifyUserNameRequest = createAsyncThunk(
    "user/modifyUserNameRequest",
    async (data) => {
        const response = await updateUserName(data);
        return response.data.body;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        // disconnect the user
        logOutUser: (state, action) => {
            sessionStorage.removeItem("token");
            state.user.isLogged = false;
            state = initialUserState;
        },
    },
    extraReducers: (builder) => {
        //// LOGIN REQUEST
        builder.addCase(logInRequest.pending, (state) => {
            state.token.loading = true;
            state.token.error = null;
        });
        builder.addCase(logInRequest.fulfilled, (state, action) => {
            state.token.loading = false;
            state.token.error = null;
            state.token.token = action.payload.token;
            state.user.isLogged = true;
        });
        builder.addCase(logInRequest.rejected, (state, action) => {
            console.log(action);
            state.token.loading = false;
            state.token.error = action.error.message;
        });
        // FETCH USER REQUEST
        builder.addCase(fetchUserRequest.pending, (state) => {
            state.user.loading = true;
        });
        builder.addCase(fetchUserRequest.fulfilled, (state, action) => {
            state.user.loading = false;
            state.user.firstName = action.payload.firstName;
            state.user.lastName = action.payload.lastName;
        });
        builder.addCase(fetchUserRequest.rejected, (state) => {
            state.user.loading = false;
            state.user.error = true;
        });
        // MODIFY NAME REQUEST
        builder.addCase(modifyUserNameRequest.pending, (state) => {
            state.user.loading = true;
        });
        builder.addCase(modifyUserNameRequest.fulfilled, (state, action) => {
            state.user.loading = false;
            state.user.firstName = action.payload.firstName;
            state.user.lastName = action.payload.lastName;
        });
        builder.addCase(modifyUserNameRequest.rejected, (state) => {
            state.user.loading = false;
            state.user.error = true;
        });
    },
});

export const userActions = { ...userSlice.actions };
export default userSlice.reducer;
