import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

const Post = (props) => {
     const user = props.props.props.user
    return (
        <div className='post'>
            <Avatar/>
            <div className="post__content">
                <h4>{user.username}
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
