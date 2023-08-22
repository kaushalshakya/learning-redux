import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: 1,
        title: 'Learning Redux',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis distinctio eos aperiam quo cumque, quam numquam nihil, possimus quae labore tempore laborum qui ducimus et dolore earum. Repellendus, a?',
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions: {
            like: 0,
            dislike: 0,
            love: 0,
            funny: 0,
            sad: 0,
            angry: 0
        }
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
                    return {
                        payload : {
                            id: nanoid(),
                            title,
                            date: new Date().toISOString(),
                            content,
                            userId,
                            reactions: {
                                like: 0,
                                dislike: 0,
                                love: 0,
                                funny: 0,
                                sad: 0,
                                angry: 0
                            }
                        },
                        
                    }
                },
            },
            reactionAdded(state, action) {
                console.log(action);
                const { postId, reaction } = action.payload;
                const existingPost = state.find(post => post.id == postId);
                if (existingPost) {
                    existingPost.reactions[reaction]++;
                }
            }
        }
    }
)

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;