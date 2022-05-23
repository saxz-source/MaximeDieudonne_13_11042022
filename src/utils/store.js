import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user.slice";
import errorsReducer from "../features/error.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        error: errorsReducer,
    },
});
