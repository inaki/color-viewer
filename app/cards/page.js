"use client"
import React, { useState, useEffect } from "react";
import ColorCard from "../components/ColorCard";
import Navbar from "../components/NavBar";

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

  return (
    <div className="min-h-screen px-5">
      
      <Navbar className="my-10"/>

      {Object.keys(colors).map((category) => (
        <div key={category} className="mb-8">
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
