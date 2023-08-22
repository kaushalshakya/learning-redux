import { useSelector } from "react-redux";
import { allUsers } from "../users/usersSlice";

import React from 'react'

const PostAuthor = ({userId}) => {
  const users = useSelector(allUsers);
  console.log(users);
  const author = users.find(user => user.id == userId);
  // console.log(author);
  return (
    <span>Author: {author ? author.firstName.concat(' ', author.lastName) : 'Unknown Author'}</span>
  )
}

export default PostAuthor
