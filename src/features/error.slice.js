import { createSlice } from "@reduxjs/toolkit";

const initialErrorsState = {
    errorText: "",
    isError: false,
};

const errorsSlice = createSlice({
    name: "errors",
    initialState: initialErrorsState,
    reducers: {
        setErrorForUser: (state, action) => {
            console.log(action);
            state.errorText = action.payload.errorText;
            state.isError = true;
        },
        cleanErrors: (state, action) => {
            state = initialErrorsState;
            document.location.reload();
        },
    },
});

export const errorsActions = { ...errorsSlice.actions };
export default errorsSlice.reducer;
