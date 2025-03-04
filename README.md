
![CleanShot 2025-03-04 at 12 28 43@2x](https://github.com/user-attachments/assets/5cac160a-117a-4216-b3fd-3aeb1dfb2d9b)

# Color Viewer

A web-based **Color Viewer** built with **Next.js, React, and Tailwind CSS**, designed to visually display and categorize colors from a JSON file.

## Features
- **Displays Colors in a Grid**: Shows each color in a visually appealing card layout.
- **Organizes Colors by Category**: Groups colors based on predefined categories.
- **Shows Color Details**: Displays variations, format, usage count, and file locations.
- **Fetches Data from a JSON File**: Reads color information dynamically from a stored JSON file.

## Tech Stack
- **Next.js** - Server-side rendering and optimized performance.
- **React** - UI components for dynamic rendering.
- **Tailwind CSS** - Utility-first styling for rapid development.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/color-viewer.git
cd color-viewer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the project in action.

## JSON Data Structure
The app fetches color data from `public/colors.json`. The JSON structure follows this format:
```json
{
  "#ff9800": {
    "name": "#ff9800",
    "count": 1,
    "variations": ["#ff9800"],
    "unique": true,
    "color_format": "hex",
    "category": "orange",
    "locations": ["src/pages/assistant/[id]/Usage/components/SentimentCard.stories.tsx"]
  },
  "#4CAF50": {
    "name": "#4CAF50",
    "count": 2,
    "variations": ["#4CAF50", "#43A047"],
    "unique": false,
    "color_format": "hex",
    "category": "green",
    "locations": ["src/components/Button.tsx", "src/styles/global.css"]
  }
}
```

## How It Works
1. **Loads JSON data** from `/public/colors.json`.
2. **Groups colors** by category.
3. **Displays each color** in a grid layout.
4. **Shows details** including variations, count, and file locations.

## Code Overview

### Fetching Colors from JSON
Inside `app/page.js`, the data is fetched dynamically:
```javascript
useEffect(() => {
  fetch("/colors.json")
    .then((response) => response.json())
    .then((data) => {
      const groupedColors = {};
      Object.values(data).forEach((color) => {
        if (!groupedColors[color.category]) {
          groupedColors[color.category] = [];
        }
        groupedColors[color.category].push(color);
      });
      setColors(groupedColors);
    })
    .catch((error) => console.error("Error loading colors:", error));
}, []);
```

### Rendering Color Cards
```javascript
function ColorCard({ color }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border">
      <div className="h-16 w-full rounded-md" style={{ backgroundColor: color.name }}></div>
      <div className="mt-4">
        <p className="text-lg font-semibold">{color.name}</p>
        <p className="text-gray-600 text-sm">Count: {color.count}</p>
        <p className="text-gray-600 text-sm">Format: {color.color_format.toUpperCase()}</p>
      </div>
    </div>
  );
}
```

## Deployment
To deploy the app, run:
```bash
npm run build
npm run start
```

For production, deploy to **Vercel**:
```bash
vercel
```

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m "Added new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any issues or suggestions, please create an issue in the repository or contact me at [your.email@example.com](mailto:your.email@example.com).

