import { parseISO, formatDistanceToNow} from "date-fns";

import React from 'react'

const Time = ({time}) => {
    let timeAgo = '';
    if(time){
        const date = parseISO(time);
        timeAgo = `${formatDistanceToNow(time, timeAgo)} ago`;
    }
  return (
    <span title={time}>
        &nbsp; Added: <i>{timeAgo}</i>
    </span>
  )
}

export default Time