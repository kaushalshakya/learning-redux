import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

import React from 'react'

const ReactionButtons = ({ post }) => {
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
        console.log('reaction:', name);
        dispatch(reactionAdded(
            {
                postId,
                reaction: name
            }
        ))
    }

    const reactions = Object.entries(reactionEmojis).map(([name, emojis]) => {
        return (
            <button key={name} className="reactionButton" type="button" onClick={() => handleReactions(name, post.id)}>{emojis} {post.reactions[name]}</button>
        )
    })
  return (
    <div>{reactions}</div>
  )
}

export default ReactionButtons