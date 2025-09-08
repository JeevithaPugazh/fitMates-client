import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dailyData = [
  { name: 'Mon', progress: 10 },
  { name: 'Tue', progress: 25 },
  { name: 'Wed', progress: 45 },
  { name: 'Thu', progress: 30 },
  { name: 'Fri', progress: 50 },
  { name: 'Sat', progress: 75 },
  { name: 'Sun', progress: 90 },
];

const weeklyData = [
  { name: 'Week 1', progress: 150 },
  { name: 'Week 2', progress: 250 },
  { name: 'Week 3', progress: 200 },
  { name: 'Week 4', progress: 350 },
];

const monthlyData = [
  { name: 'Jan', progress: 800 },
  { name: 'Feb', progress: 1200 },
  { name: 'Mar', progress: 1000 },
  { name: 'Apr', progress: 1500 },
  { name: 'May', progress: 1300 },
  { name: 'Jun', progress: 1800 },
];

const dataMap = {
  daily: dailyData,
  weekly: weeklyData,
  monthly: monthlyData,
};

const DailyProgressGraph = () => {
  const [timeframe, setTimeframe] = useState('daily');

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  const currentData = dataMap[timeframe];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Progress</h3>
        <select
          value={timeframe}
          onChange={handleTimeframeChange}
          className="px-3 py-1.5 text-sm rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={currentData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.3)" />
          <XAxis dataKey="name" stroke="rgb(156 163 175)" />
          <YAxis stroke="rgb(156 163 175)"/>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(31, 41, 55, 0.8)', 
              borderColor: 'rgba(128, 128, 128, 0.5)',
              color: '#ffffff'
            }} 
          />
          <Legend />
          <Line type="monotone" dataKey="progress" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyProgressGraph;
