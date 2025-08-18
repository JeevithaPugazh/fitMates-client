import React from 'react'
import Nav from '../components/Nav.jsx'

import MainContent from '../components/MainContent.jsx'


 const Dashboard = ({theme, toggleTheme}) => {
  return (
    <div className='flex flex-col h-screen dark:bg-gray-900'>
      <Nav toggleTheme={toggleTheme} theme={theme} />
      <div className='flex flex-1'>
        <MainContent />
      </div>
    </div>
  )
}

export default Dashboard
