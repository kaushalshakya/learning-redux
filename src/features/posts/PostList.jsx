import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import Time from './Time';
import ReactionButtons from './ReactionButtons';
import { Link } from 'react-router-dom';

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPost.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p> {post.content.length >= 100 ? post.content.substring(0,100) + '...' : post.content}</p>
            <p className='postCredit'>
                <PostAuthor userId = {post.userId}/>
              <Time time={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ))
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
        <Link to='/add-post'><button>Add Post</button></Link>
    </section>
  )
}

export default PostList