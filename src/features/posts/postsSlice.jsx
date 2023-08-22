import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: 1,
        title: 'Learning Redux',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis distinctio eos aperiam quo cumque, quam numquam nihil, possimus quae labore tempore laborum qui ducimus et dolore earum. Repellendus, a?',
        date: sub(new Date(), {minutes: 10}).toISOString(),
    }
]

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers : {
            postAdded : {
                reducer(state, action){
                    state.push(action.payload)
                },
                prepare(title, content, userId) {
                    console.log(userId);
                    return {
                        payload : {
                            id: nanoid(),
                            title,
                            date: new Date().toISOString(),
                            content,
                            userId
                        },
                        
                    }
                }
            }
        }
    }
)

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;