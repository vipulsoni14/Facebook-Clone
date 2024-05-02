import React from 'react'
import { Link } from 'react-router-dom'
import SidebarRow from './SidebarRow'
import { Avatar } from '@mui/material'
import './Sidebar.css'
import { CalendarMonth, Group, Photo, SavedSearch, Search, Shop, VideoCall, ViewCarousel } from '@mui/icons-material'

function SIdebar(user) {
  return (
    <div className='sidebar'>
        <Link to="/vipul">
            <SidebarRow avatar ImageLink={Avatar} title={"Vipul"}/>
        </Link>
        <SidebarRow ImageLink={ViewCarousel} title="COVID-19 Information Centre" />
            <SidebarRow ImageLink={<Search/>} title="Find Friends" />
            <SidebarRow ImageLink={<Group/>} title="Groups" />
            <SidebarRow ImageLink={<Shop/>} title="Marketplace" />
            <SidebarRow ImageLink={<VideoCall/>} title="Videos" />
            <SidebarRow ImageLink={<CalendarMonth/>} title="Events" />
            <SidebarRow ImageLink={<Photo/>} title="Memories" />
            <SidebarRow ImageLink={<SavedSearch/>} title="Saved" />
            <SidebarRow dropdown ImageLink="null" title="See more" />
            <div className="hr" />
            <div className="policies">
                <p>Privacy</p>
                <p className="dot">·</p>
                <p>Terms</p>
                <p className="dot">·</p>
                <p>Advertising</p>
                <p className="dot">·</p>
                <p>Ad choices</p>
                <i className="ads" />
                <p className="dot">·</p>
                <p>Cookies</p>
                <p className="dot">·</p>
                <p>More</p>
                <p className="dot">·</p>
                <p>Facebook © 2024</p>
            </div>

    </div>
  )
}

export default SIdebar

