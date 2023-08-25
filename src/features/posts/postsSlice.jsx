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
                    const getPosts = localStorage.getItem('Posts');
                    const array = getPosts ? JSON.parse(getPosts) : [];
                    array.push(state);
                    console.log(array);
                    localStorage.setItem('Posts', JSON.stringify(array));
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
                const { postId, reaction } = action.payload;
                const post = localStorage.getItem('Posts');
                const postJson = JSON.parse(post);
                const existingPostArr = postJson.findIndex(post => post.id == postId);

                const statePost = state.find(post => post.id == postId);
                if (statePost) {
                    console.log(statePost);
                    statePost.reactions[reaction]++;
                }

                if (existingPostArr !== -1) {
                    const existingPost = postJson[existingPostArr];
                    if (existingPost.reactions) {
                        console.log(existingPost.reactions);
                        if (existingPost.reactions[reaction]) {
                            existingPost.reactions[reaction]++;
                        } else {
                            existingPost.reactions[reaction] = 1;  
                        }
                    } else {
                        existingPost.reactions = { [reaction]: 1 };
                    }
                }
                localStorage.setItem('Posts', JSON.stringify(postJson));
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