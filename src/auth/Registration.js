import React, { Component, useState } from 'react'
import { auth, provider } from '../firebase'
import axios from 'axios'
import './Registration.css'
import { Button } from '@material-ui/core'
<<<<<<< HEAD
=======
import { useSelector, connect } from 'react-redux'
import { selectUser, login } from '../features/userSlice'
>>>>>>> messenger

function Registration() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }

<<<<<<< HEAD
    render() {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='username' 
                        name='username' 
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <input 
                        type='password' 
                        name='password_confirmation' 
                        placeholder='Password Confirmation'
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <Button type='submit'>Register</Button>
                </form>
=======
    return (
        <div className='login'>
            <div className="login__logo">
                <h1>Chattr</h1>
                {/* <img src="https://www.pngkit.com/png/detail/15-152120_transparent-teeth-chatter-teeth-chattering-clip-art.png" alt=""/> */}
>>>>>>> messenger
            </div>
            <button 
                className='login_button'
                onClick={signIn}
                >SIGN IN</button>
        </div>
    )
}

export default Registration