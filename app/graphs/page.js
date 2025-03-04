"use client"
import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import ColorBarChart from "../components/ColorBarChart";

export default function Home() {
  const [colors, setColors] = useState({});


  useEffect(() => {
    fetch("../data/colors.json")
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

      <ColorBarChart colorData={colors} />
    </div>
  );
}
