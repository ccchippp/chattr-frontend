import React from 'react'
import './SidebarChannel.css'

const SidebarChannel = (props) => {
    // selectChannel(event) {
    //     console.log('handle submit', event)

    //     const {
    //         username,
    //         email,
    //         password,
    //         password_confirmation
    //     } = this.state

    //     axios.post('http://localhost:3000/registrations', {
    //         user: {
    //             username: username,
    //             email: email,
    //             password: password,
    //             password_confirmation: password_confirmation
    //         }
    //     },
    //         { withCredentials: true }
    //     ).then(res => {
    //         console.log('registration response', res)
    //         if (res.data.status === 'created'){
    //         this.props.handleSuccessfulAuth(res.data)
    //     }
    //     }).catch(error => {
    //         // console.log('registration error', error)
    //     })
    // }
    return (
        <div 
        className='sidebarChannel'
        // onClick={this.selectChannel}
        >
            <h4><span className="sidebarChannel__hash">#</span>Chip's Channel</h4>
        </div>
    )
}

export default SidebarChannel
