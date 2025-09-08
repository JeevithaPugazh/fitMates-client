import React from "react";

const TabbedNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ["Dashboard", "Achievements", "Buddies"];

  return (
    <div className="w-full flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`flex-1 py-2 text-center font-medium transition-all rounded-full shadow-sm
            ${
              activeTab === index
                ? "bg-blue-600 text-white dark:bg-blue-700 dark:text-white"
                : "text-gray-700 dark:text-gray-300 dark:hover:text-gray-700 hover:bg-blue-200 dark:hover:bg-blue-200"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabbedNavigation;