import React, { Component } from 'react'
import axios from 'axios'
import './Registration.css'
import { Button } from '@material-ui/core'

export default class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handle submit', event)

        const {
            username,
            email,
            password,
            password_confirmation
        } = this.state

        axios.post('http://localhost:3000/registrations', {
            user: {
                username: username,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },
            { withCredentials: true }
        ).then(res => {
            console.log('registration response', res)
        }).catch(error => {
            console.log('registration error', error)
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
            </div>
        )
    }
}
