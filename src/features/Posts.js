import React from 'react'
import ChannelTitle from './ChannelTitle'
import './Posts.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Post from './Post';

function Posts() {
    return (
        <div className='posts__container'>
            <ChannelTitle />
            <div className="posts">
                <Post/>
            </div>
            <div className="post__input">
                <AddCircleIcon />
                <form>
                    <input 
                        type="text" 
                        placeholder={`Message #Channel Title`}/>
                    <button 
                        type='submit'
                        className='post__inputButton'>
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
