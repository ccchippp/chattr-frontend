import React from 'react'
import { useSelector } from 'react-redux'
import './Dashboard.css'
import Sidebar from './features/Sidebar'
import Posts from './features/Posts'
import { selectUser } from './features/userSlice'
import Registration from './auth/Registration'


function Dashboard() {
    const user = useSelector(selectUser)

    return (
        <div className='dashboard'>
            {user ? (
                <>
                    <Sidebar />
                    <Posts/>
                </>
            ) : (
                <Registration/>
            )}
        </div>
    )
}

export default Dashboard

