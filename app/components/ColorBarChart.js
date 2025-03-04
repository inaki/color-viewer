import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ColorBarChart = ({ colorData = [] }) => {


  // Process the data for visualization
  const processedData = Object.entries(colorData).map(([category, colors]) => {
    // Sort colors by similarity (here we're simplifying by using the hex value as a proxy)
    const sortedColors = [...colors].sort((a, b) => a.name.localeCompare(b.name));
    
    return {
      category,
      colors: sortedColors,
      totalCount: sortedColors.reduce((sum, color) => sum + color.count, 0)
    };
  });

  // Sort categories by total count for the main visualization
  const sortedCategories = [...processedData].sort((a, b) => b.totalCount - a.totalCount);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Color Distribution by Category</h1>
      
      <div className="space-y-8">
        {sortedCategories.map((categoryData, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2 capitalize">{categoryData.category} ({categoryData.totalCount} occurrences)</h2>
            
            {/* Horizontal color bar */}
            <div className="h-12 flex rounded-md overflow-hidden mb-4">
              {categoryData.colors.map((color, colorIndex) => {
                // Calculate width percentage based on color count relative to category total
                const widthPercentage = (color.count / categoryData.totalCount) * 100;
                return (
                  <div
                    key={colorIndex}
                    className="h-full relative group"
                    style={{
                      backgroundColor: color.name,
                      width: `${widthPercentage}%`
                    }}
                  >
                    <div className="absolute invisible group-hover:visible bg-black bg-opacity-75 text-white text-xs p-1 rounded bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                      {color.name} ({color.count})
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Individual color swatches with details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {categoryData.colors.map((color, colorIndex) => (
                <div key={colorIndex} className="flex items-center">
                  <div 
                    className="w-6 h-6 rounded mr-2" 
                    style={{ backgroundColor: color.name }}
                  ></div>
                  <div className="text-xs">
                    <div className="font-mono">{color.name}</div>
                    <div className="text-gray-500">Count: {color.count}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Overall comparison chart */}
      <div className="mt-8 border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Category Comparison</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={sortedCategories.map(cat => ({ 
                category: cat.category, 
                count: cat.totalCount 
              }))}
              margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="category" />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="count" 
                name="Total Count" 
                fill="#8884d8" 
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ColorBarChart;
