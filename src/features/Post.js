import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post({ user, message, timestamp }) {
    return (
        <div className='post'>
            <Avatar src={user.photo}/>
            <div className="post__content">
                <h4>{user.displayName}
                    <span className='post__timestamp'>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p className='post__text'>
                    {message}
                </p>
            </div>
            
        </div>
    )
}

export default Post
