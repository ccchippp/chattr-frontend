import React, { Component, useState } from 'react'
import { auth, provider } from '../firebase'
import axios from 'axios'
import './Registration.css'
import { Button } from '@material-ui/core'
import { useSelector, connect } from 'react-redux'
import { selectUser, login } from '../features/userSlice'

function Registration() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <h1>Chattr</h1>
                {/* <img src="https://www.pngkit.com/png/detail/15-152120_transparent-teeth-chatter-teeth-chattering-clip-art.png" alt=""/> */}
            </div>
            <button 
                className='login_button'
                onClick={signIn}
                >SIGN IN</button>
        </div>
    )
}

export default Registration