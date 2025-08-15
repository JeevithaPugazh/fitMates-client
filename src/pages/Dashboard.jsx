import React from 'react'
import Nav from '../components/Nav.jsx'
import SideBar from '../components/SideBar.jsx'
import MainContent from '../components/MainContent.jsx'

 const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Nav />
      <div className='flex flex-1'>
        <SideBar />
        <MainContent />
      </div>
    </div>
  )
}

export default Dashboard
