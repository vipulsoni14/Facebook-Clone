import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar2Row.css';

function Sidebar2Row({ title}) {
  return (
    <div className="sidebar2Row">
    <Avatar className="avatar"/>
    <h1>{title}</h1>
</div>
  )
}

export default Sidebar2Row
