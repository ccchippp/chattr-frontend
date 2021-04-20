import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import db, { auth } from '../firebase';


function Sidebar() {

  const user = useSelector(selectUser)
  const [channels, setChannels] = useState([])

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) => 
      setChannels(
        snapshot.docs.map((doc) => ({
        id: doc.id,
        channel: doc.data(),
      }))
    )
  )
  }, [])

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name')
    if (channelName) {
      db.collection('channels').add({
        channelName: channelName,
      })
    }
  }

    return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>Chip</h3>
        <ExpandMoreIcon/>
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <ExpandMoreIcon/>
              <h4>Channels</h4>
            </div>
            <AddIcon 
            className='sidebar__addChannel'
            onClick={handleAddChannel}/>
        </div>
        <div className="sidebar__channelsList">
            {channels.map(({id, channel}) => (
            <SidebarChannel 
            key={id} 
            id={id}
            channelName={channel.channelName} />
            ))}
        </div>
      </div>
      <div className="sidebar__profile">
          <Avatar 
          src={user.photo}
          onClick={()=> auth.signOut()}/>
          <div className="sidebar__profileInfo">
              <h3>{user.displayName}</h3>
              <p>#{user.uid.substring(0,5)}</p>
          </div>
      </div>
    </div>
    )
}


export default Sidebar
