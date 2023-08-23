import { useDispatch } from "react-redux";
import { authorFame } from "./usersSlice";

import React from 'react'

const AuthorFame = ({author}) => {
    const dispatch= useDispatch();
    const fameEmojis = {
        love: '💕',
        hate: '❌',
    }

    const handleReactions = (name, authorId) => {
        dispatch(
            authorFame(
                {
                    authorId,
                    fame: name
                }
            )
        )
    }

    const fame = Object.entries(fameEmojis).map(([name, emojis]) => {
        return (
            <button key={name} className="reactionButton" type="button" onClick={() => handleReactions(name, author.id)}>{emojis} {author.fame[name]}</button>
        )
    })

  return (
    <div>{fame}</div>
  )
}

export default AuthorFame