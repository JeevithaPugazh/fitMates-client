import React from 'react';
import BuddiesList from '../components/BuddiesList';

const BuddiesContent = () => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Buddies</h2>
      <BuddiesList />
    </div>
  );
};

export default BuddiesContent;
