import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@material-ui/core';


const Sidebar = (props) => {
  const username = props.props.user.username
    return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>{username}</h3>
        <ExpandMoreIcon/>
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <ExpandMoreIcon/>
              <h4>Channels</h4>
            </div>
            <AddIcon className='sidebar__addChannel'/>
        </div>
        <div className="sidebar__channelsList">
            <SidebarChannel props={props}/>
        </div>
      </div>
      <div className="sidebar__profile">
          <Avatar src='https://avatars.githubusercontent.com/u/63663532?s=400&u=9c07edd7047c41311049593e22f1cace173c8fb0&v=4'/>
          <div className="sidebar__profileInfo">
              <h3>{username}</h3>
              <p>Chip Lempke</p>
          </div>
      </div>
    </div>
    )
}


export default Sidebar
