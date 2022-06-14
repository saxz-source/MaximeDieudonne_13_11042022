import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logIn, updateUserName, fetchUser } from "../API/APICalls";
import {
    handleUserRemembering,
    removeTokenFromStorage,
} from "../utils/handleUserRemembering";
import { sleepFunction } from "../utils/sleepFunction";

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
        rememberMe: false,
    },
};

/**
 * Log the user request
 */
export const logInRequest = createAsyncThunk(
    "user/logInRequest",
    async (data) => {
        const response = await logIn(data);
        //  console.log(response.data.body)
        return { apiResponse: response.data.body, rememberMe: data.rememberMe };
    }
);

/**
 * Get the user profile request
 */
export const fetchUserRequest = createAsyncThunk(
    "user/fetchUserRequest",
    async (token) => {
        // await  sleepFunction()
        const response = await fetchUser(token);
        return response.data.body;
    }
);

/**
 * Modify the user name request
 */
export const modifyUserNameRequest = createAsyncThunk(
    "user/modifyUserNameRequest",
    async (data) => {
        const response = await updateUserName(data.apiPayload, data.token);
        return response.data.body;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        logUserWithStorage: (state, action) => {
            state.token.token = action.payload;
            state.user.isLogged = true;
        },
        rememberUser: (state, action) => {
            state.user.rememberMe = true;
        },
        // disconnect the user
        logOutUser: (state, action) => {
            removeTokenFromStorage();
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
            state.token.token = action.payload.apiResponse.token;
            state.user.rememberMe = action.payload.rememberMe;
            state.user.isLogged = true;

            handleUserRemembering(state.user.rememberMe, state.token.token);
        });
        builder.addCase(logInRequest.rejected, (state, action) => {
            state.token.loading = false;
            state.token.error = action.error.message;
            state.user.isLogged = false;
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
        builder.addCase(fetchUserRequest.rejected, (state, action) => {
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
        builder.addCase(modifyUserNameRequest.rejected, (state, action) => {
            state.user.loading = false;
            state.user.error = true;
        });
    },
});

export const userActions = { ...userSlice.actions };
export default userSlice.reducer;
