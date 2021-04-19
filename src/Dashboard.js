import React from 'react'
import Sidebar from './features/Sidebar'
import Posts from './features/Posts'
import './Dashboard.css'

const Dashboard = props => {
    // console.log(props)
    return (
        <div className='dashboard'>
             {/* <h1>Status: {props.loggedInStatus}</h1> */}
            <Sidebar props={props}/>
            <Posts props={props}/>
        </div>
    )
}

export default Dashboard