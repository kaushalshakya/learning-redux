import { createSlice, nanoid } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers : {
            postAdded : {
                reducer(state, action){
                    state.push(action.payload);
                    localStorage.setItem('Posts', JSON.stringify(state));

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
                const postId = action.payload;
                return state.filter(post => post.id != postId);
            },
            updatePost(state, action) {
                const {id, title, content, image} = action.payload;
                console.log(action.payload);
                const postIndex = state.findIndex(post => post.id == id);

                if (postIndex !== -1) {
                    const targetPost = state[postIndex];
                    const updatedPost = {
                        ...targetPost,
                        title: title.length > 0 ? title : targetPost.title,
                        content: content.length > 0 ? content : targetPost.content,
                        image: image ? image : targetPost.image
                    };
                    state[postIndex] = updatedPost;
                }
            }

        }
    }
)

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;