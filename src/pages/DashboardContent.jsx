import React from 'react';
import DailyProgressGraph from '../components/DailyProgressGraph';
import WeightHistoryCalendar from '../components/WeightHistoryCalendar';
import DailyActivitySummary from '../components/DailyActivitySummary';
import CircleProgress from '../components/CircleProgress';

const DashboardContent = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img src="/trophy.png" alt="Trophy" className="h-8 w-8 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Progress</h2>
      </div>
      <div className="w-full mt-4 flex flex-row justify-between">
        <CircleProgress value={80} label="Exercise" color="indigo" info="45 mins" />
        <CircleProgress value={65} label="Calorie Burn" color="orange" info="500 cal" />
        <CircleProgress value={90} label="Steps" color="emerald" info="5000 steps" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        <DailyProgressGraph />
        <DailyActivitySummary />
        <WeightHistoryCalendar />
      </div>
    </div>
  );
};

export default DashboardContent;
