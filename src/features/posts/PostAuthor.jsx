
import AuthorFame from "../users/AuthorFame";

import React from 'react'

const PostAuthor = ({userId}) => {
  const users = localStorage.getItem('authors');
  const usersJson = JSON.parse(users);
  console.log(usersJson);
  const author = usersJson.filter(user => user.id == userId);
  return (
    <>
      {author.image && <img src={author.image} className='profilePosts' alt="" />}
        <span>Author: {author ? `${author.firstName} ${author.lastName}` : 'Unknown Author'}</span>
        <span><AuthorFame author={author} /></span>
    </>

  )
}

export default PostAuthor
