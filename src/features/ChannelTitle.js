import React from 'react'
import './ChannelTitle.css'

function ChannelTitle({ channelName }) {
    return (
        <div className='channelTitle'>
            <div className="channelHeader__left">
            <h3><span className="channelHeader__hash">#</span>{channelName}</h3>
            </div>
            <div className="channelHeader__right">
                
            </div>
        </div>
    )
}

export default ChannelTitle
