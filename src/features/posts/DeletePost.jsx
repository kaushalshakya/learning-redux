import { useDispatch } from "react-redux";
import { deletePost } from "./postsSlice";
import deleteIcon from '../../assets/delete.svg';

import React from 'react'

const DeletePost = ({postId}) => {
    console.log(postId);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(
            deletePost(postId)
        );
    }
  return (
    <button onClick={handleDelete} type="button">Delete</button>
  )
}

export default DeletePost