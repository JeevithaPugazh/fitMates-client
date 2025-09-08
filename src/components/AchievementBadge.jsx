import React from 'react';
import AchievementProgressBar from './AchievementProgressBar';

const badgeColors = {
  exercise: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  steps: 'bg-indigo-100 text-indigo-800 border-indigo-300',
  calorie: 'bg-orange-100 text-orange-800 border-orange-300',
  daily: 'bg-pink-100 text-pink-800 border-pink-300',
  hydration: 'bg-blue-100 text-blue-800 border-blue-300',
  sleep: 'bg-purple-100 text-purple-800 border-purple-300',
};

const badgeIcons = {
  exercise: '🏋️‍♂️',
  steps: '👟',
  calorie: '🔥',
  daily: '⭐',
  hydration: '💧',
  sleep: '🌙',
};

const AchievementBadge = ({ type = 'exercise', label, value = 0 }) => {
  const colorClass = badgeColors[type] || 'bg-gray-100 text-gray-800 border-gray-300';
  const icon = badgeIcons[type] || '🏅';
  return (
  <div className={`w-full h-20  flex items-center px-3 py-1 rounded-xl text-sm font-semibold border shadow ${colorClass}`}>
      <span className="mr-1 text-lg">{icon}</span>
      {label}
      <AchievementProgressBar value={value} />
    </div>
  );
};

export default AchievementBadge;
