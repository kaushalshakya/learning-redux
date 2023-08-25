import React from 'react'
import { allUsers } from './usersSlice'
import { useSelector } from 'react-redux';
import NavigationButton from '../../components/NavigationButton';
import AuthorFame from './AuthorFame';
import DeleteAuthor from './DeleteAuthor';

export const AuthorList = () => {
  const users = useSelector(allUsers);

  const testUsers = localStorage.getItem('authors');
  const testAuthorList = JSON.parse(testUsers);
  console.log(testAuthorList);

  const authors = testAuthorList.map(author => 
      author.id !==0 && (
        <article key={author.id}>
        {author.image && <img className='profile' src={author.image} alt="" />}
        <h3>First Name: {author.firstName}</h3>
        <h3>Last Name: {author.lastName}</h3>
        <AuthorFame author={author} />
        <DeleteAuthor authorId={author.id}/>
        <NavigationButton navigateTo={`/authors/${author.id}`} buttonName={'View Details'}/>
        </article>
      )
    )

  return (
    <section>
        <h1>Author List:</h1>
        {authors}
        <NavigationButton navigateTo={'/'} buttonName={'Home'}/>
    </section>
  )
}