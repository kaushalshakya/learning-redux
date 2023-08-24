import { useDispatch } from "react-redux";
import { deletePost } from "./postsSlice";
import deleteIcon from '../../assets/delete.svg';

import React from 'react'

const DeletePost = ({postId}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(
            deletePost(postId)
        );
        // Step 1: Fetch and parse the Posts data from localStorage
        let posts = JSON.parse(localStorage.getItem('Posts'));

        // Step 2: Filter out the post with the specified postId
        posts = posts.filter(post => post.id !== postId);

        // Step 3: Stringify and save the modified posts data back to localStorage
        localStorage.setItem('Posts', JSON.stringify(posts));

    }
  return (
    <button onClick={handleDelete} type="button">Delete</button>
  )
}

export default DeletePost