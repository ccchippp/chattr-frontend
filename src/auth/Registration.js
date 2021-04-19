import React, { Component, useState } from 'react'
import axios from 'axios'
import './Registration.css'
import { Button } from '@material-ui/core'
import { useSelector, connect } from 'react-redux'
import { selectUser, login } from '../features/userSlice'

function Registration() {

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="" alt=""/>
            </div>
            <Button 
                onClick='signIn'
                >Sign In</Button>
            {/* <form 
            onSubmit={this.handleSubmit}
            >
                <input 
                    type='username' 
                    name='username' 
                    placeholder='Username'
                    value={username}
                    onChange={this.handleChange}
                    required>
                </input>
                <br/>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Email'
                    value={email}
                    onChange={this.handleChange}
                    required>
                </input>
                <br/>
                <input 
                    type='password' 
                    name='password' 
                    placeholder='Password'
                    value={password}
                    onChange={this.handleChange}
                    required>
                </input>
                <br/>
                <input 
                    type='password' 
                    name='password_confirmation' 
                    placeholder='Password Confirmation'
                    value={password_confirmation}
                    onChange={this.handleChange}
                    required>
                </input>
                <br/>
                <Button 
                type='submit'
                >Register</Button>
            </form> */}
        </div>
    )
}

export default Registration