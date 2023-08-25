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
    console.log("post data",testPost);
    const orderTestPost = testPost && testPost.slice().sort((a,b) => b.date.localeCompare(a.date));

    console.log("order",orderTestPost);

    const renderedTestPost = orderTestPost && orderTestPost.map(post => (
      <article key = {post.id}>
         <p className='postCredit'>
        <h3>Title: {post.title}</h3>
        <p>Content: {post.content.length >= 100 ? post.content.substring(0,100) + '...' : post.content}</p>
        {post.image && <p><img className='postImg' src={post.image} alt="" /></p>}
                <PostAuthor userId = {post.userId}/>
              <Time time={post.date} />
          </p>
          <ReactionButtons post={post} />
          <Link to={`/post/${post.id}`}><button type='button'>Update</button></Link>
      </article>
    ))
  return (
   
    <section>
        {posts && <h2>Posts</h2>}
        {renderedTestPost}
        <NavigationButton navigateTo={'/new-user'} buttonName={'Add Author'}/>
        <NavigationButton navigateTo={'/add-post'} buttonName={'Add Post'}/>
        <NavigationButton navigateTo={'/authors'} buttonName={'View Authors'}/>
    </section>
  )
}

export default PostList