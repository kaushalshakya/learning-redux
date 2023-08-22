import { parseISO, formatDistanceToNow} from "date-fns";

import React from 'react'

const Time = ({time}) => {
    let timeAgo = '';
    if(time){
        const date = parseISO(time);
        const dist = formatDistanceToNow(date);
        timeAgo = `${dist} ago`;
    }
  return (
    <span title={time}>
        &nbsp; Added: <i>{timeAgo}</i>
    </span>
  )
}

export default Time