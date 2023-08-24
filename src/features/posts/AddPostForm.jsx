import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { allUsers } from '../users/usersSlice';
import { Link } from 'react-router-dom';
import NavigationButton from '../../components/NavigationButton';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const users = useSelector(allUsers);

    const onSubmit = () => {
        if(title && content) {
            dispatch(
                postAdded(title, content, userId, (image ? image : null))
            )
            if(userId == 0) {
                return alert('Please select a valid author');
            }
            setTitle('');
            setContent('');
        }
    }

    const handleKeyDown = (e) => {
        if(e.key.toLowerCase() == 'enter') {
            onSubmit();
        }
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.firstName} {user.lastName}
        </option>
    ))

    const canSave = title && content && userId;

  return (
    <section>
        <h2>Add a new post!</h2>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title">Title: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="title">Image: </label>
            <input type="file"  onChange={onImageUpload}/>
            <label htmlFor="postAuthor">Post Author:</label>
            <select id="postAuthor" value={userId} onChange={(e) => setUserId(e.target.value)}>{userOptions}</select>
            <label htmlFor="content">Content: </label>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
            <Link to='/'><button type='submit' onKeyDown={handleKeyDown} onClick={onSubmit} disabled = {!canSave}>Save Post</button></Link>
            <NavigationButton navigateTo={'/authors'} buttonName={'View Authors'}/>
            <NavigationButton navigateTo={'/new-user'} buttonName={'Add Author'}/>
        </form>
    </section>
  )
}

export default AddPostForm