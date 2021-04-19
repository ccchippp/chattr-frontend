import React from 'react'
import Sidebar from './features/Sidebar'
import Posts from './features/Posts'
import './Dashboard.css'

const Dashboard = (props) => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <Posts />
        </div>
    )
}

export default Dashboard