import React, { useState } from 'react';

import TabbedNavigation from '../components/TabbedNavigation';
import DashboardContent from './DashboardContent';
import AchievementsContent from './AchievementsContent';
import BuddiesContent from './BuddiesContent';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <DashboardContent />;
      case 1:
        return <AchievementsContent />;
      case 2:
        return <BuddiesContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex-1 p-4 flex flex-col h-full">
      
      <TabbedNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4 flex-1">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;