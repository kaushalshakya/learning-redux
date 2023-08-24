import { useSelector } from "react-redux";
import { allUsers } from "../users/usersSlice";
import AuthorFame from "../users/AuthorFame";

import React from 'react'

const PostAuthor = ({userId}) => {
  const users = useSelector(allUsers);
  const author = users.find(user => user.id == userId);
  console.log(author);
  return (
    <p>{author.image && <img src={author.image} className = 'profilePosts' alt="" />}<span>Author: {author ? author.firstName.concat(' ', author.lastName) : 'Unknown Author'}</span><span><AuthorFame author={author} /></span></p>
  )
}

export default PostAuthor
