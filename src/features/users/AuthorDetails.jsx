import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectAllPosts } from '../posts/postsSlice'
import PostAuthor from '../posts/PostAuthor'
import ReactionButtons from '../posts/ReactionButtons'
import Time from '../posts/Time'
import NavigationButton from '../../components/NavigationButton'

const AuthorDetails = () => {
    const posts = useSelector(selectAllPosts);
    const { id } = useParams();
    const authorPosts = posts.filter(post => post.userId == id).map(post => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p className='postCredit'> {post.content.length >= 100 ? post.content.substring(0,100) + '...' : post.content}</p>
         <p className='postCredit'>
              <PostAuthor userId = {post.userId}/>
              <Time time={post.date} />
          </p>
          <ReactionButtons post={post} />
      </article>
    ));

    if(!authorPosts.length){
      return(
        <h1>This user has no posts</h1>
      )
    }
  return (
    <section>
      {authorPosts}
      <NavigationButton navigateTo={'/new-user'} buttonName={'Add Author'}/>
      <NavigationButton navigateTo={'/authors'} buttonName={'View Authors'}/>
      <NavigationButton navigateTo={'/'} buttonName={'Home'}/>
      <NavigationButton navigateTo={'/add-post'} buttonName={'Add Post'}/>
    </section>
  )
}

export default AuthorDetails