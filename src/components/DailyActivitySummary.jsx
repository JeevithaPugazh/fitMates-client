import React from 'react';

const DailyActivitySummary = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Calories Burned Today</h3>
      <div className="text-center mb-4">
        <p className="text-4xl font-bold text-orange-500">1,250</p>
        <p className="text-gray-500 dark:text-gray-400">kcal</p>
      </div>
      <div className="overflow-y-auto space-y-4 max-h-40">
        {/* Steps Card */}
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Steps</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">8,500 steps</p>
          </div>
          <p className="font-bold text-gray-800 dark:text-gray-200">400 kcal</p>
        </div>
        {/* Workout Card */}
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Workout</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">45 min running</p>
          </div>
          <p className="font-bold text-gray-800 dark:text-gray-200">850 kcal</p>
        </div>
        {/* Additional dummy data to demonstrate scrolling */}
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Cycling</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">30 min</p>
          </div>
          <p className="font-bold text-gray-800 dark:text-gray-200">300 kcal</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Swimming</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">1 hour</p>
          </div>
          <p className="font-bold text-gray-800 dark:text-gray-200">600 kcal</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Yoga</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">20 min</p>
          </div>
          <p className="font-bold text-gray-800 dark:text-gray-200">100 kcal</p>
        </div>
        
      </div>
    </div>
  );
};

export default DailyActivitySummary;
