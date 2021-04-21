import React, { useEffect, useRef, useState } from 'react'
import './ChatBar.css'
import Chat from './Chat'
import ChatHeader from './ChatHeader'
import { useSelector } from 'react-redux'
import { selectUser } from './userSlice'
import { selectChatId, selectChatName } from './chatSlice';
import db, { auth } from '../firebase'
import firebase from 'firebase'
import ChatMessage from './ChatMessage'
import { useCollectionData } from 'react-firebase-hooks/firestore'



function ChatBar() {
    const user = useSelector(selectUser)
    const chatId = useSelector(selectChatId)
    const chatName = useSelector(selectChatName)

    const [formValue, setFormValue] = useState('')
    // const [messages, setMessages] = useState([])
// 
    const messagesRef = db.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query, {idField: 'id'})
    const dummy = useRef()
// 

    const sendMessage = async(e) => {
        e.preventDefault()
        console.log('user data', user)

        // const { uid, photoUrl } = auth.user
        
        await messagesRef.add({
            text:formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user.uid,
            photoUrl: user.photo
        })
        setFormValue('')
        dummy.current.scrollIntoView({
            behavior: 'smooth'
        })
        }


    return (
        <div className='chat__container'>
            <ChatHeader chatName={chatName}/>
            <div className="chats">
                {messages && messages.map(msg => 
                <ChatMessage 
                    key={msg.id} 
                    message={msg}/>
                    )}
            </div>
            <div ref={dummy}></div>
            <div className="chat__input">
                <form onSubmit={sendMessage}>
                    <input 
                        type="text" 
                        placeholder={`Message`}
                        value={formValue}
                        onChange={e => setFormValue(e.target.value)}
                        // disabled={!friendId}
                        />
                    <button 
                        type='submit'
                        className='chat__inputButton'
                        // onClick={sendMessage}
                        >
                        Send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatBar