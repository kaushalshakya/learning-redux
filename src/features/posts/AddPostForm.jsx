import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onSubmit = () => {
        if(title && content) {
            dispatch(
                postAdded(
                    {
                        id: nanoid(),
                        title,
                        content
                    }
                )
            )
            setTitle('');
            setContent('');
        }
    }

  return (
    <section>
        <h2>Add a new post!</h2>
        <form>
            <label htmlFor="title">Title: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="content">Content: </label>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
            <button type='button' onClick={onSubmit}>Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm