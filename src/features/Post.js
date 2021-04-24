import { Avatar } from '@material-ui/core'
import React from 'react'
import db from '../firebase'
import './Post.css'
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector } from 'react-redux';
import { selectChannelId } from './appSlice';

function Post({ user, post, timestamp }) {
    const channelId = useSelector(selectChannelId)

    // const handleAddChat = () => {
    //     // const chatName = prompt('Enter a new chat name')
    //     const chatName = user.displayName
    //     if (chatName) {
    //       db.collection('chats').add({
    //         chatName: user.displayName,
    //       })
    //     }
    //   }
    
    const handleDel = () => {
        db.collection('channels')
        .doc(channelId)
        .collection('posts')
        .doc(post.id).delete()
    }

    return (
        <div className='post'>
            <Avatar src={user.photo}
            // onClick={handleAddChat}
            />
            <div className="post__content">
                <h4>{user.displayName}
                    <span className='post__timestamp'>
                        <ClearIcon 
                            className='clearIcon'
                            onClick={handleDel}
                            id={post.id}
                            />
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
