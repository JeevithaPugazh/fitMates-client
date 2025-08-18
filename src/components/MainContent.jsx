import React, { useEffect } from 'react';
import AchievementTracker from './AchievementTracker';
import TabbedNavigation from './TabbedNavigation'; 
const MainContent = () => {
   

  return (
    <div className="flex-1 p-4">
      {/* Add your main content here */}
      <AchievementTracker />
      <TabbedNavigation />
        
    </div>
  );
};

export default MainContent;
