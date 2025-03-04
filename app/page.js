"use client"
import React, { useState, useEffect } from "react";
import ColorCard from "./components/ColorCard";

export default function Home() {
  const [colors, setColors] = useState({});


  useEffect(() => {
    fetch("/data/colors.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Group colors by category

        setColors(data);
      })
      .catch((error) => console.error("Error loading colors:", error));
  }, []);

  console.log(colors);

  return (
    <div className="min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-6">Color Visualizer</h1>

      {Object.keys(colors).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {colors[category].map((color, index) => (
              <ColorCard key={index} color={color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
