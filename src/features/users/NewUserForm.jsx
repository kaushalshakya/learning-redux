import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAdd } from './usersSlice';

const NewUserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(firstName && lastName){
            dispatch(
                userAdd(firstName, lastName),
            );
            setFirstName('');
            setLastName('');
        }
    }

    const handleKeyDown = (e) => {
        if(e.key.toLowerCase() == 'enter'){
            handleSubmit();
        }
    }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <button type='submit' onClick={handleSubmit} onKeyDown={handleKeyDown}>Submit</button>
        <Link to='/'><button type='button'>View Posts</button></Link>
        <Link to='/add-post'><button type='button'>Add Post</button></Link>
    </form>
  )
}

export default NewUserForm