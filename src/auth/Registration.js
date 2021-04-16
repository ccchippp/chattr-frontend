import React, { Component, useState } from 'react'
import axios from 'axios'
import './Registration.css'
import { Button } from '@material-ui/core'
import { useSelector, connect } from 'react-redux'
import { selectUser, login } from '../features/userSlice'

// const Registration = () => {

//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [password_confirmation, setPasswordConfirmation] = useState('')


class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            // registrationErrors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handle submit', event)

        this.props.login(this.state)

        // const user = useSelector(selectUser)

        // axios.post('http://localhost:3000/registrations', {
        //     user: {
        //         username: username,
        //         email: email,
        //         password: password,
        //         password_confirmation: password_confirmation
        //     }
        // },
        //     { withCredentials: true }
        // ).then(res => {
        //     if (res.data.status === 'created'){
        //         this.state({
        //             user: {
        //                 username: username,
        //                 email: email,
        //                 password: password,
        //                 password_confirmation: password_confirmation
        //             }
        //         })
        //     }
        // }).catch(error => {
        //     console.log('registration error', error)
        // })
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        
        const {
            username,
            email,
            password,
            password_confirmation
        } = this.state

        return (
            <div className='login'>
                <div className="login__logo">
                    <img src="" alt=""/>
                </div>
                <form 
                onSubmit={this.handleSubmit}
                >
                    <input 
                        type='username' 
                        name='username' 
                        placeholder='Username'
                        value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <br/>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email'
                        value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <br/>
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password'
                        value={password}
                        // onChange={(e) => setPassword(e.target.value)}
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
                        // onChange={(e) => setPasswordConfirmation(e.target.value)}
                        required>
                    </input>
                    <br/>
                    <Button 
                    type='submit'
                    >Register</Button>
                </form>
            </div>
        )
    }
}

LoginFom.propTypes ={
    login: React.PropTypes.func.isRequired
}

export default  connect(null, {login})(Registration)