import React from 'react';

function ColorCard({ color }) {
  const [showAllLocations, setShowAllLocations] = React.useState(false);
  const maxLocations = 4;
  
  const displayedLocations = showAllLocations 
    ? color.locations 
    : color.locations?.slice(0, maxLocations);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border">
      {/* Color Block */}
      <div className="h-16 w-full rounded-md" style={{ backgroundColor: color.name }}></div>
  
      {/* Color Info */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {/* Left Column - Color Info */}
        <div>
          <p className="text-black text-lg font-semibold uppercase">{color.name}</p>
          <p className="text-black text-sm">Count: {color.count}</p>
          <p className="text-black text-sm">Unique: {color.unique ? "Yes" : "No"}</p>
          <p className="text-black text-sm">Format: {color.color_format}</p>
        </div>
  
        {/* Right Column - Variations */}
        <div>
          <p className="text-sm font-medium text-black">Variations:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {color.variations?.map((variation, index) => (
              <span
                key={index}
                className="w-5 h-5 rounded-full border"
                style={{ backgroundColor: variation }}
              />
            ))}
          </div>
        </div>
  
        {/* File Locations - Full Width */}
        <div className="col-span-2 mt-3">
          <p className="text-sm font-medium text-black">Locations:</p>
          <ul className="text-xs text-black mt-1">
            {displayedLocations?.map((location, index) => (
              <li key={index} className="truncate">{location}</li>
            ))}
          </ul>
          {color.locations?.length > maxLocations && (
            <button
              onClick={() => setShowAllLocations(!showAllLocations)}
              className="text-xs text-blue-600 hover:text-blue-800 mt-1"
            >
              {showAllLocations ? 'Show Less' : `Show ${color.locations.length - maxLocations} More`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
  export default ColorCard;