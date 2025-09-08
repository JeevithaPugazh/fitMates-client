import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const WeightHistoryCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedWeight, setSelectedWeight] = useState('');

  // Sample data
  const weightLogs = {
    '2025-08-18': '75kg',
    '2025-08-15': '75.5kg',
    '2025-08-10': '76kg',
  };

  const getWeightForDate = (d) => {
    const dateString = d.toISOString().split('T')[0];
    return weightLogs[dateString] || 'No data logged for this date.';
  };

  useEffect(() => {
    setSelectedWeight(getWeightForDate(date));
  }, []); // Run only on mount to set initial weight

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedWeight(getWeightForDate(newDate));
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      if (weightLogs[dateString]) {
        return (
          <div
            className="flex justify-center items-center mt-1"
            data-tooltip-id="weight-tooltip"
            data-tooltip-content={`Weight: ${weightLogs[dateString]}`}
          >
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weight History</h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileContent={tileContent}
        className="w-full border-none"
      />
      <Tooltip id="weight-tooltip" />
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-800 dark:text-gray-200">
          <span className="font-semibold">
            {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}:
          </span>
          {' '}{selectedWeight}
        </p>
      </div>
    </div>
  );
};

export default WeightHistoryCalendar;
