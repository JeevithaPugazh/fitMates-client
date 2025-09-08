import React from 'react';

const AchievementProgressBar = ({value}) => {
  return (
    <div className="w-full ml-2 mx-auto flex items-center">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-6 border border-gray-400 dark:border-gray-600 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 h-6 rounded-full transition-all duration-500"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <span className="ml-2  text-sm font-bold text-gray-700 dark:text-gray-300">{value}%</span>
      </div>
    </div>
  );
};

export default AchievementProgressBar;
