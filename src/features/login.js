import axios from 'axios'

export function login(data) {
    return dispatch => {
        return axios.post('http://localhost:3000/registrations', {
            user: {
                username: username,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },
            { withCredentials: true }        
    }
}