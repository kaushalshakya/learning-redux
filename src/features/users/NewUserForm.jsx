import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAdd } from './usersSlice';

const NewUserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [image, setProfileImg] = useState(null);

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(firstName && lastName){
            dispatch(
                userAdd(firstName, lastName, image),
            );
            setFirstName('');
            setLastName('');
            setProfileImg(null);
        }
        
    }

    const handleKeyDown = (e) => {
        if(e.key.toLowerCase() == 'enter'){
            handleSubmit();
        }
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileImg(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    }

  return (
    <section>
        <h2>Add a new user!</h2>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <label htmlFor="Profile Image">Upload profile image:</label>
            <input type="file" onChange={handleImage} />
            <button type='submit' onClick={handleSubmit} onKeyDown={handleKeyDown}>Submit</button>
            <Link to='/'><button type='button'>View Posts</button></Link>
            <Link to='/add-post'><button type='button'>Add Post</button></Link>
        </form>
    </section>
  )
}

export default NewUserForm