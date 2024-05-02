import React from 'react'
import './Sidebar2.css'
import { Avatar } from '@mui/material'
import Sidebar2Row from './Sidebar2Row'



function Sidebar2() {
  return (
    <div className="sidebar2">
            <div class="hr" />

            <div className="details">
                <h1>Contacts</h1>
                <i className="searchIcon2" />
                <i className="more" />
            </div>
            <div className="contacts">
                <Sidebar2Row  title="Rupanshu Soni" />
                <Sidebar2Row  title="Harsh Soni" />
                <Sidebar2Row  title="Mohnish Soni" />
                <Sidebar2Row  title="Ed Sheeran" />
                <Sidebar2Row  title="Justin Bieber" />
            </div>
        </div >
  )
}

export default Sidebar2
