import React, { useEffect, useState } from 'react'
import ChannelTitle from './ChannelTitle'
import './Posts.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './appSlice';
import { selectUser } from './userSlice';
import db from '../firebase';
import firebase from 'firebase'


function Posts() {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .collection('posts')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) =>
                    setPosts(snapshot.docs.map((doc) => doc.data()))
            )
        }
        }, [channelId])

    const sendPost = e => {
        e.preventDefault()

        db.collection('channels')
            .doc(channelId)
            .collection('posts')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                post: input,
                user: user,
            })
            setInput('')
        }

    // const deletePost = e => {

    //     db.collection('channels')
    //         .doc(channelId)
    //         .collection('posts')
    //         .remove()
    //     }

    return (
        <div className='posts__container'>
            <ChannelTitle channelName={channelName} />
                <div className="posts">
                    {posts.map((post) => (
                    <Post
                        timestamp={post.timestamp}
                        post={post.post}
                        user={post.user}
                    />
                    ))}
                </div>
            <div className="post__input">
                <AddCircleIcon />
                <form>
                    <input 
                        type="text" 
                        placeholder={`Post to #${channelName}`}
                        value={input}
                        disabled={!channelId}
                        onChange={e => setInput(e.target.value)}/>
                    <button 
                        type='submit'
                        className='post__inputButton'
                        onClick={sendPost}>
                        Send</button>
                </form>
                <div className="post__inputIcons">
                    <GifIcon />
                    <EmojiEmotionsIcon />
                    {/* <Emoji /> */}
                </div>
            </div>
        </div>
    )
}

export default Posts