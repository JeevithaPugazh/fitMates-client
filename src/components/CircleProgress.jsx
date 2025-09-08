import React from 'react';

const CircleProgress = ({ value = 0, label = '', color = 'indigo', info }) => {
  // Responsive size: 64px on mobile, 100px on md+ screens
  // Use fixed size for SVG, but scale with Tailwind classes for responsiveness
  const size = 128; // base size for SVG
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const colorClass = {
    indigo: 'stroke-indigo-500',
    orange: 'stroke-orange-500',
    emerald: 'stroke-emerald-500',
  }[color] || 'stroke-indigo-500';

  return (
    <div className="flex flex-col items-center justify-center">
  <div className="relative mb-2 w-16 h-16 md:w-32 md:h-32 flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          viewBox={`0 0 ${size} ${size}`}
        >
          <circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className={colorClass}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        {/* Info text in center */}
        {typeof info !== 'undefined' && (
          <span className="absolute inset-0 flex flex-col items-center justify-center text-[10px] md:text-lg font-semibold text-gray-700 dark:text-gray-200 text-center leading-tight px-1 pointer-events-none">
            {info}
          </span>
        )}
      </div>
      <span className="text-base md:text-xl font-bold text-gray-900 dark:text-white">{value}%</span>
      <span className="text-xs md:text-base text-gray-500 dark:text-gray-400">{label}</span>
    </div>
  );
};

export default CircleProgress;
