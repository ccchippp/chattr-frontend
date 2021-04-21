import { Avatar } from '@material-ui/core'
import React from 'react'
import db from '../firebase'
import './Post.css'

function Post({ user, post, timestamp }) {

    const handleAddChat = () => {
        // const chatName = prompt('Enter a new chat name')
        const chatName = user.displayName
        if (chatName) {
          db.collection('chats').add({
            chatName: user.displayName,
          })
        }
      }


    return (
        <div className='post'>
            <Avatar src={user.photo}
            onClick={handleAddChat}/>
            <div className="post__content">
                <h4>{user.displayName}
                    <span className='post__timestamp'>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p className='post__text'>
                    {post}
                </p>
            </div>
        </div>
    )
}

export default Post
