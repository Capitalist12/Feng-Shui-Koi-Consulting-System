import { createSlice } from "@reduxjs/toolkit"


// const initialState = {
//     token: "",
//     username: "",
//     role: ""
// }

const user = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        login: (state, action) => {
            state = action.payload;
            return state;
        },

        logout: (state) => {
            state = null;
            return null;
        }
    }
});


export const {login, logout} = user.actions;
export default user.reducer;