import { createSlice, nanoid } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [];
const postArticle=[];

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers : {
            postAdded : {
                reducer(state, action){
                    
                    state.push(action.payload);
                    
                    postArticle.push(action.payload);
                   
                    localStorage.setItem("Posts", JSON.stringify(postArticle));
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

            //    const statePost = state.find(post => post.id == postId);
            //     if (statePost) {
            //         console.log(statePost);
            //         statePost.reactions[reaction]++;
            //     } 

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

                const postsJson = localStorage.getItem('Posts');
                const posts = JSON.parse(postsJson);

                console.log(action.payload);
                const postIndex = posts.findIndex(post => post.id == id);

                console.log('post Index', postIndex);

                if (postIndex !== -1) {
                    const targetPost = posts[postIndex];
                    const updatedPost = {
                        ...targetPost,
                        title: title.length > 0 ? title : targetPost.title,
                        content: content.length > 0 ? content : targetPost.content,
                        image: image ? image : targetPost.image
                    };
                    posts[postIndex] = updatedPost;
                }

                localStorage.setItem('Posts', JSON.stringify(posts))
            }

        }
    }
)

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;