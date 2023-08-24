import { createSlice, nanoid } from "@reduxjs/toolkit";

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
                const {postId, title, content, image} = action.payload;

                // Find the index of the post to be updated
                const postIndex = state.find(post => post.id === postId);
                console.log('postIndex');
                console.log(postIndex);

                if (postIndex !== -1) {
                    const targetPost = state[postIndex];

                    const updatedPost = {
                        ...targetPost,
                        title: title ? title : targetPost.title,
                        content: content ? content : targetPost.content,
                        image: image ? image : targetPost.image
                    };

                    // Replace the old post with the updated post in the state array
                    state[postIndex] = updatedPost;
                }
            }

        }
    }
)

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;