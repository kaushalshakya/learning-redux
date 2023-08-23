import React from 'react'
import { allUsers } from './usersSlice'
import { useSelector } from 'react-redux';
import NavigationButton from '../../components/NavigationButton';
import AuthorFame from './AuthorFame';

export const AuthorList = () => {
    const users = useSelector(allUsers);
    const authorList = users.map(author => 
    author.id !== 0 && (
        <article key={author.id}>
            <h3>First Name: {author.firstName}</h3>
            <h3>Last Name: {author.lastName}</h3>
            <AuthorFame author={author} />
            <NavigationButton navigateTo={`/authors/${author.id}`} buttonName={'View Details'}/>
        </article>
    )
);

  return (
    <section>
        <h1>Author List:</h1>
        {authorList}
        <NavigationButton navigateTo={'/'} buttonName={'Home'}/>
    </section>
  )
}
