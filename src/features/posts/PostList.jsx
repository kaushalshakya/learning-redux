import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import Time from './Time';
import ReactionButtons from './ReactionButtons';
import NavigationButton from '../../components/NavigationButton';
import DeletePost from './DeletePost';
import { Link } from 'react-router-dom';

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const test = localStorage.getItem('Posts');
    const testPost = JSON.parse(test);
    const orderTestPost = testPost && testPost.slice().sort((a,b) => b.date.localeCompare(a.date));

    const renderedTestPost = orderTestPost && orderTestPost.map(post => (
      <article key = {post[0].id}>
        <h3>{post[0].title}</h3>
        <p> {post[0].content.length >= 100 ? post[0].content.substring(0,100) + '...' : post[0].content}</p>
        {post[0].image && <p><img className='postImg' src={post[0].image} alt="" /></p>}
         <p className='postCredit'>
                <PostAuthor userId = {post[0].userId}/>
              <Time time={post[0].date} />
          </p>
          <ReactionButtons post={post[0]} />
          <Link to={`/post/${post[0].id}`}><button type='button'>Update</button></Link>
      </article>
    ))
  return (
    <section>
        {posts[0] && <h2>Posts</h2>}
        {renderedTestPost}
        <NavigationButton navigateTo={'/new-user'} buttonName={'Add Author'}/>
        <NavigationButton navigateTo={'/add-post'} buttonName={'Add Post'}/>
        <NavigationButton navigateTo={'/authors'} buttonName={'View Authors'}/>
    </section>
  )
}

export default PostList