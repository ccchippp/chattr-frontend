import React, { useEffect, useState } from 'react'
import './ChatBar.css'
import Chat from './Chat'
import ChatHeader from './ChatHeader'
import { useSelector } from 'react-redux'
import { selectUser } from './userSlice'

function ChatBar() {
    const user = useSelector(selectUser)

    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])

    return (
        <div className='chat__container'>
            {/* <ChannelTitle channelName={channelName} /> */}
            <ChatHeader/>
            <div className="chats">
                {/* {messages.map((message) => ( */}
                <Chat
                    // timestamp={message.timestamp}
                    // message={message.message}
                    // user={message.user}
                />
                {/* ))} */}
            </div>
            <div className="chat__input">
                <form>
                    <input 
                        type="text" 
                        placeholder={`Message`}
                        // value={input}
                        // disabled={!friendId}
                        // onChange={e => setInput(e.target.value)}
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