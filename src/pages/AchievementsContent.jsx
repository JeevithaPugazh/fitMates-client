import React from 'react';


import AchievementBadge from '../components/AchievementBadge';

const achievements = [
  {
    type: 'exercise',
    label: 'Weekly Exercise',
    value: 90,
    badgeImg: '/fitnessStreak.jpg',
  },
  {
    type: 'steps',
    label: 'Weekly Steps',
    value: 100,
    badgeImg: '/stepMaster.jpg',
  },
  {
    type: 'calorie',
    label: 'Weekly Calorie',
    value: 100,
    badgeImg: '/calorieCrusher.jpg',
  },
  {
    type: 'daily',
    label: 'Daily Consistency',
    value: 100,
    badgeImg: '/consistencyStar.jpg',
  },
   {
    type: 'sleep',
    label: 'Daily Sleep',
    value: 100,
    badgeImg: '/sleepMaster.jpg',
  },
   {
    type: 'hydration',
    label: 'Daily Hydration',
    value: 100,
    badgeImg: '/hydrationHero .jpg',
  },
  
];
const AchievementsContent = () => {
  // Filter achievements with 100% progress
  const completedBadges = achievements.filter(a => a.value === 100);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">My Achievements</h2>
      {/* Row of badge images for completed achievements */}
      {completedBadges.length > 0 && (
        <div className="flex flex-row gap-6 justify-center items-center my-6">
          {completedBadges.map(a => (
            <img
              key={a.type}
              src={a.badgeImg}
              alt={a.label + ' badge'}
              className="w-45 h-45 object-cover rounded-full border-4 border-yellow-400 shadow-lg"
            />
          ))}
        </div>
      )}
      <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {achievements.map(a => (
          <AchievementBadge key={a.type} type={a.type} label={a.label} value={a.value} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsContent;
