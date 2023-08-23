import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers : {
            postAdded : {
                reducer(state, action){
                    console.log('image action?');
                    console.log(action);
                    state.push(action.payload)
                },
                prepare(title, content, userId, image) {
                    return {
                        payload : {
                            id: nanoid(),
                            title,
                            date: new Date().toISOString(),
                            content,
                            userId,
                            image,
                            reactions: {
                                like: 0,
                                dislike: 0,
                                love: 0,
                                funny: 0,
                                sad: 0,
                                angry: 0
                            },
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
            },
            deletePost(state, action) {
                console.log(action);
                const postId = action.payload;
                return state.filter(post => post.id != postId);
            }
        }
    }
)

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded, deletePost } = postsSlice.actions;

export default postsSlice.reducer;