import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name:"auth",
    initialState: [],
    reducers: {
        addLogin: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo)
        }
    },
})


export const {addLogin} = authSlice.actions;

export default authSlice.reducer;