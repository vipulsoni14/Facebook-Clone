import React from 'react'
import HomeHeader from './HomeHeader'
import SIdebar from './SIdebar'
import Sidebar2 from './Sidebar2'
import './HomePage.css'
import Posts from './Posts'

function HomePage() {
  return (
    <div >
      <HomeHeader />
      <div className='homepage'>
      <SIdebar />
      <div className='app__posts'>
        <Posts/>
      </div>
      <Sidebar2 />
      </div>
    </div>
  )
}

export default HomePage
