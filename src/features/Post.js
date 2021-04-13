import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className='post'>
            <Avatar/>
            <div className="post__content">
                <h4>ccchippp
                    <span className='post__timestamp'>timestamp</span>
                </h4>
                <p className='post__text'>
                    This is the body of the post
                </p>
            </div>
            
        </div>
    )
}

export default Post
