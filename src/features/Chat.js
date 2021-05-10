import React from 'react'
import './Chat.css'

function Chat() {
    return (
        <div className='ccc'>
            {/* <Avatar src={user.photo}/> */}
            <div className="c__content">
                <h4>Sender
                    {/* {user.displayName} */}
                    <span className='c__timestamp'>
                        4:54 p.m.
                        {/* {new Date(timestamp?.toDate()).toUTCString()} */}
                    </span>
                </h4>
                <p className='c__text'>
                    {/* {message} */}This is an example of chat
                </p>
            </div>
        </div>
    )
}

export default Chat
