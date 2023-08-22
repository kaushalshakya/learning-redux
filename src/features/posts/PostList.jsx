import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import Time from './Time';

const PostList = () => {
    const posts = useSelector(selectAllPosts);
    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p> {post.content.length >= 100 ? post.content.substring(0,100) + '...' : post.content}</p>
            <p className='postCredit'>
                <PostAuthor userId = {post.userId}/>
            </p>
            <p>
              <Time time={new Date()}></Time>
            </p>
        </article>
    ))
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostList