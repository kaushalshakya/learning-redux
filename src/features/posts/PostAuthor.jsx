import { useSelector } from "react-redux";
import { allUsers } from "../users/usersSlice";
import AuthorFame from "../users/AuthorFame";

import React from 'react'

const PostAuthor = ({userId}) => {
  const users = useSelector(allUsers);
  const author = users.find(user => user.id == userId);
  return (
    <div>
      {author.image && <img src={author.image} className='profilePosts' alt="" />}
      <p>
        <span>Author: {author ? `${author.firstName} ${author.lastName}` : 'Unknown Author'}</span>
        <span><AuthorFame author={author} /></span>
      </p>
    </div>

  )
}

export default PostAuthor
