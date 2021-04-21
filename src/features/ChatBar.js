import React, { useEffect, useState } from 'react'
import './ChatBar.css'
import Chat from './Chat'
import ChatHeader from './ChatHeader'
import { useSelector } from 'react-redux'
import { selectUser } from './userSlice'
import { selectChatId, selectChatName } from './chatSlice';
import db from '../firebase'
import firebase from 'firebase'
import ChatMessage from './ChatMessage'
import { useCollectionData } from 'react-firebase-hooks/firestore'



function ChatBar() {
    const user = useSelector(selectUser)
    const chatId = useSelector(selectChatId)
    const chatName = useSelector(selectChatName)

    // const [text, setText] = useState('')
    // const [messages, setMessages] = useState([])
// 
    const messagesRef = db.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query, {idField: 'id'})
// 
    // useEffect(() => {
    //     if (chatId) {
    //         db.collection('chats')
    //             .doc(chatId)
    //             .collection('messages')
    //             .orderBy('timestamp', 'asc')
    //             .onSnapshot((snapshot) =>
    //                 setMessages(snapshot.docs.map((doc) => doc.data()))
    //         )
    //     }
    //     }, [chatId])

    // const sendMessage = e => {
    //     e.preventDefault()

    //     db.collection('chats')
    //         .doc(chatId)
    //         .collection('messages')
    //         .add({
    //             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //             message: text,
    //             user: user,
    //         })
    //         setText('')
    //     }


    return (
        <div className='chat__container'>
            <ChatHeader chatName={chatName}/>
            <div className="chats">
                {messages && messages.map(msg => 
                <ChatMessage 
                    key={msg.id} 
                    message={msg}/>
                    )}
                {/* {messages.map((message) => (
                <Chat
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                />
                ))} */}
            </div>
            <div className="chat__input">
                {/* <form>
                    <input 
                        type="text" 
                        placeholder={`Message`}
                        value={text}
                        // disabled={!friendId}
                        onChange={e => setText(e.target.value)}
                        />
                    <button 
                        type='submit'
                        className='chat__inputButton'
                        // onClick={sendMessage}
                        >
                        Send</button>
                </form> */}
            </div>
        </div>
    )
}

export default ChatBar