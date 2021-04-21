import { Avatar } from '@material-ui/core'
import React from 'react'
import { auth } from '../firebase'
import './ChatMessage.css'


function ChatMessage(props) {
    const { text, uid, photoUrl } = props.message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`}>
            <Avatar src={photoUrl}/>
            <p className='chatMessageContent'>{text}</p>
        </div>
    )
}

export default ChatMessage