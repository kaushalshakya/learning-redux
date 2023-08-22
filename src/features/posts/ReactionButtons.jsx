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
    const reactions = Object.entries(reactionEmojis).map(([name, emojis]) => {
        return (
            <button key={name} className="reactionButton" type="button" onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}>{emojis} {post.reactions[name]}</button>
        )
    })
  return (
    <div>{reactions}</div>
  )
}

export default ReactionButtons