import { useDispatch } from "react-redux";
import { deleteAuthor } from "./usersSlice";

import React from 'react'

const DeleteAuthor = ({authorId}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(
            deleteAuthor(authorId)
        );
    }
  return (
    <button onClick={handleDelete} type="button">Delete Author</button>
  )
}

export default DeleteAuthor