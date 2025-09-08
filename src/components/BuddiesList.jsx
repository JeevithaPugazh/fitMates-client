
import React from 'react';
import AchievementProgressBar from './AchievementProgressBar';

const buddies = [
  {
    id: 1,
    name: 'Bob',
    profilePic: '/profile1.jpg',
    badges: [
      { type: 'steps', img: '/stepMaster.jpg' },
      { type: 'calorie', img: '/calorieCrusher.jpg' },
      { type: 'exercise', img: '/fitnessStreak.jpg' },
    ],
  },
  {
    id: 2,
    name: 'Alice',
    profilePic: '/profile2.jpg',
    badges: [
      { type: 'steps', img: '/stepMaster.jpg' },
      { type: 'exercise', img: '/fitnessStreak.jpg' },
    ],
  },
  {
    id: 3,
    name: 'Anitha',
    profilePic: '/profile3.jpg',
    badges: [
      { type: 'calorie', img: '/calorieCrusher.jpg' },
    ],
  },
  {
    id: 4,
    name: 'Alex',
    profilePic: '/profile4.jpg',
    badges: [
      { type: 'steps', img: '/stepMaster.jpg' },
      { type: 'calorie', img: '/calorieCrusher.jpg' },
      { type: 'exercise', img: '/fitnessStreak.jpg' },
      { type: 'daily', img: '/consistencyStar.jpg' },
    ],
  },
];

const sortedBuddies = [...buddies].sort((a, b) => b.badges.length - a.badges.length);

const BuddiesList = () => (
  <div className="p-4">
    <h2 className="text-2xl font-extrabold mb-8 text-center text-blue-700 dark:text-blue-300 tracking-wide">Buddies Leaderboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {sortedBuddies.map((buddy, idx) => {
        const progress = Math.min(100, buddy.badges.length * 25); // Example: 4 badges = 100%
        return (
          <div key={buddy.id} className="relative flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 rounded-2xl shadow-xl p-6 border-2 border-blue-300 dark:border-blue-700">
            <span className="absolute top-4 left-4 bg-yellow-400 text-white rounded-full px-3 py-1 text-sm font-bold shadow">#{idx + 1}</span>
            <img src={buddy.profilePic} alt={buddy.name} className="w-24 h-24 rounded-full border-4 border-blue-400 object-cover mb-3 shadow-lg" />
            <div className="font-bold text-xl mb-2 text-blue-900 dark:text-blue-200">{buddy.name}</div>
            <AchievementProgressBar value={progress} />
            <div className="flex flex-row flex-wrap gap-3 justify-center items-center mt-4">
              {buddy.badges.map((badge, i) => (
                <img key={i} src={badge.img} alt={badge.type + ' badge'} className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-lg bg-white" />
              ))}
            </div>
            <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">Badges: {buddy.badges.length}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default BuddiesList;
