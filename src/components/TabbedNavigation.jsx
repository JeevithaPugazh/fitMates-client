import React, { useState } from "react";

const TabbedNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Assign colors for each tab
  const tabColors = [
    { active: "bg-blue-600 text-white", hover: "hover:bg-blue-200", dark: "dark:bg-blue-700 dark:text-white", darkHover: "dark:hover:bg-blue-200 text-blue-600" },
    { active: "bg-orange-500 text-white", hover: "hover:bg-orange-200", dark: "dark:bg-orange-600 dark:text-white", darkHover: "dark:hover:bg-orange-200 text-orange-500" },
    { active: "bg-green-600 text-white", hover: "hover:bg-green-200", dark: "dark:bg-green-700 dark:text-white", darkHover: "dark:hover:bg-green-200 text-green-600" },
  ];

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
                ? tabColors[index].active + " " + tabColors[index].dark
                : `text-gray-700 dark:text-gray-300 dark:hover:text-gray-700   ${tabColors[index].hover} ${tabColors[index].darkHover}`
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabbedNavigation;
