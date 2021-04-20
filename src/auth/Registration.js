import React, { Component, useState } from 'react'
import axios from 'axios'
import './Registration.css'
import { Button } from '@material-ui/core'
import { useSelector, connect } from 'react-redux'
import { selectUser, login } from '../features/userSlice'

function Registration() {
    const signIn = () => {
        
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="" alt=""/>
            </div>
            <Button 
                onClick={signIn}
                >Sign In</Button>
        </div>
    )
}

export default Registration