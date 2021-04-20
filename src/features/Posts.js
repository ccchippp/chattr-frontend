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
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
            )
        }
        }, [channelId])

    const sendMessage = e => {
        e.preventDefault()

        db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
            })
            setInput('')
        }

    return (
        <div className='posts__container'>
            <ChannelTitle channelName={channelName} />
            <div className="posts">
                {messages.map((message) => (
                <Post
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                />
                ))}
            </div>
            <div className="post__input">
                <AddCircleIcon />
                <form>
                    <input 
                        type="text" 
                        placeholder={`Message #${channelName}`}
                        value={input}
                        disabled={!channelId}
                        onChange={e => setInput(e.target.value)}/>
                    <button 
                        type='submit'
                        className='post__inputButton'
                        onClick={sendMessage}>
                        Send</button>
                </form>
                <div className="post__inputIcons">
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Posts
