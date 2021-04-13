import React from 'react'
import Sidebar from './features/Sidebar'
import Posts from './features/Posts'
import './Dashboard.css'

function Dashboard() {
    return (
        <div className='dashboard'>
            <Sidebar />
            <Posts />
        </div>
    )
}

export default Dashboard