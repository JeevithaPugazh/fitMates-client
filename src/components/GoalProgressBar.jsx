import React from 'react';

const GoalProgressBar = () => {
  const progress = 70; // Example progress

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-base font-semibold text-gray-700 dark:text-gray-200">Weekly Goal</span>
          <span className="text-sm font-semibold text-green-500">{progress}% Achieved</span>
        </div>
        <div className="relative w-full pt-1">
          <div className="overflow-hidden h-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-600">
            <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          <div className="absolute top-0 -mt-2" style={{ left: `calc(${progress}% - 12px)` }}>
            <span role="img" aria-label="runner" className="text-2xl"> 🏃‍➡️</span>
          </div>
        </div>
      </div>
      <button className="ml-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
  );
};

export default GoalProgressBar;
