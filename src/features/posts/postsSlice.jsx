import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: 'Learning Redux',
        content: 'I am learning redux'
    }
]

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers : {
            
        }
    }
)

export default postsSlice.reducer;