import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: 'Learning Redux',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis distinctio eos aperiam quo cumque, quam numquam nihil, possimus quae labore tempore laborum qui ducimus et dolore earum. Repellendus, a?'
    }
]

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers : {
            postAdded (state, action){
                state.push(action.payload);
            }
        }
    }
)

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;