import { Avatar } from '@material-ui/core'
import React from 'react'
import db, { auth } from '../firebase'
import './Post.css'
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector } from 'react-redux';
import { selectChannelId } from './appSlice';

function Post({ user, post, timestamp, id: postId }) {
    const channelId = useSelector(selectChannelId)

// debugger
    const handleDel = () => {
        if (user.uid === auth.currentUser.uid) {
            db.collection('channels')
            .doc(channelId)
            .collection('posts')
            .doc(postId).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
}

    return (
        <div className='post'>
            <Avatar src={user.photo}
            />
            <div className="post__content">
                <h4>{user.displayName}
                    <span className='post__timestamp'>
                        <ClearIcon 
                            className='clearIcon'
                            onClick={handleDel}
                            id={post.id}
                            user={user}
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
