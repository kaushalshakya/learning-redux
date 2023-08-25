import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

import React, { useState } from 'react'

const ReactionButtons = ({ post }) => {
    console.log(post.reactions);
    const [clickCounter, setClickCounter] = useState(post.reactions);
 

    const dispatch = useDispatch();

    const reactionEmojis = {
        like: '👍',
        dislike: '👎',
        love: '💓',
        funny: '😂',
        sad: '😔',
        angry: '😠'
    }

    const handleReactions = (name, postId) => {
        const updatedState = {
            ...clickCounter,
            [name] : (clickCounter[name] || 0) +1
        }

        setClickCounter(updatedState);
        
        dispatch(reactionAdded(
            {
                postId,
                reaction: name
            }
        ))
    }

    const reactions = Object.entries(reactionEmojis).map(([name, emojis]) => {
        return (
                <button key={name} className="reactionButton" type="button" onClick={() => handleReactions(name, post.id)}>{emojis} {clickCounter[name]}</button>
            )
        })

  return (
    <div>{reactions}</div>
  )
}

export default ReactionButtons