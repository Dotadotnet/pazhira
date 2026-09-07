'use client';

import React from 'react';

const Story = () => {
  // Sample story data
  const stories = Array(10).fill(null);

  return (
    <div className="container">
      <div className="flex overflow-x-auto gap-x-4 md:justify-center justify-start pt-2 pr-8 scrollbar-hide">
        {stories.map((_, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="relative rounded-full p-0.5 bg-gradient-to-tr from-gray-300 to-gray-400 animate-pulse">
              <div className="bg-white p-0.5 rounded-full">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-200 animate-pulse">
                  {/* Skeleton placeholder for image */}
                </div>
              </div>
            </div>
            <div className="mt-2 w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;

