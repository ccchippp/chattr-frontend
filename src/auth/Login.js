import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'
import { Button } from '@material-ui/core'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        // console.log('handle submit', event)
        const {
            username,
            email,
            password,
        } = this.state

        axios.post('http://localhost:3000/sessions', {
            user: {
                username: username,
                email: email,
                password: password
            }
        },
            { withCredentials: true }
        ).then(res => {
            console.log('login response', res)
            if (res.data.logged_in) {
            this.props.handleSuccessfulAuth(res.data)
            }
        }).catch(error => {
            console.log('login error', error)
        })
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='login'>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='username' 
                        name='username' 
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <br/>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <br/>
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <br/>
                    <Button type='submit'>Login</Button>
                </form>
            </div>
        )
    }
}
