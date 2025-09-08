import React from 'react';
import Nav from '../components/Nav.jsx';
import MainContent from './MainContent.jsx';
import AchievementTracker from '../components/AchievementTracker.jsx';

const Dashboard = ({ theme, toggleTheme }) => {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-900">
      <Nav toggleTheme={toggleTheme} theme={theme} />
      <div className="p-4">
        <AchievementTracker />
      </div>
      <div className="flex-1 flex">
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
