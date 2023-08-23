import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectAllPosts } from '../posts/postsSlice'

const AuthorDetails = () => {
    const posts = useSelector(selectAllPosts);
    const { id } = useParams();
    const authorPosts = posts.filter(post => post.userId == id).map(post => (
      <article key={post.id}>
        <h3>{post.title? post.title : 'This author has no content'}</h3>
        <p className='postCredit'> {post.content.length >= 100 ? post.content.substring(0,100) + '...' : post.content}</p>
      </article>
    ));
  return (
    <section>
      {authorPosts}
    </section>
  )
}

export default AuthorDetails