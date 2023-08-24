import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, updatePost } from "./postsSlice";
import { useParams } from "react-router-dom";
import NavigationButton from "../../components/NavigationButton";

import React, { useState } from 'react'

const UpdatePostForm = () => {

    const { id } = useParams()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const allPosts = useSelector(selectAllPosts);
    const targetPost = allPosts.filter(post => post.id == id);
    const dispatch = useDispatch();

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        }

        if(file) {
            reader.readAsDataURL(file);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('id' + id + 'title: ' + title + 'content: ' + content);
        dispatch (
            updatePost({id, title, content, image})
        );
        // setTitle('');
        // setContent('');
        // setImage(null);
    }

    const handleKeyDown = (e) => {
        if(e.key.toLowerCase() == 'enter') {
            handleSubmit();
        }
    }

  return (
    <>
    {/* <article>
        <h3>Title: {targetPost[0]?.title}</h3>
        <p> {targetPost[0].content.length >= 100 ? targetPost[0].content.substring(0,100) + '...' : targetPost[0].content}</p>
        {targetPost[0].image && <img src={targetPost[0].image} className="postImg"></img>}
    </article> */}
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Post Title">Post Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="Post Content">Post Content:</label>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            <label htmlFor="Image">Image:</label>
            <input type="file" onChange={handleImage} />
            <button  onKeyDown={handleKeyDown}>Submit</button>
        </form>
        <NavigationButton navigateTo={'/'} buttonName={'Home'}/>
    </section>
    </>
  )
}

export default UpdatePostForm