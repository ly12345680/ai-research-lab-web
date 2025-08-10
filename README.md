# AI Research Platform

A modern React.js and Node.js website for showcasing AI research products and team members with CSV data storage.

## 🚀 Live Demo

**Frontend**: [Live Demo](https://ly12345680.github.io/ai-research-web/)  
**Local Development**: http://localhost:3000  
**API Server**: http://localhost:3001

## ✨ Features

- **Modern React Frontend**: Clean, responsive design with large fonts and clear product listings
- **Node.js Backend**: Express server serving data from CSV files
- **CSV Data Storage**: Products and team member data stored in CSV format
- **Video Support**: Product videos with proper video player controls
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Large Typography**: Easy-to-read font sizes for better accessibility






## Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── Products.js
│   │   │   ├── Team.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   └── App.css        # Custom CSS styling
├── server/                # Node.js backend
│   └── index.js          # Express server
├── data/                 # CSV data files
│   ├── products.csv      # Product information
│   └── team.csv         # Team member information
└── package.json         # Root dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Install dependencies for both server and client:
   ```bash
   npm run install-all
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

   This will start:
   - React development server on http://localhost:3000
   - Node.js backend on http://localhost:3001

### Individual Commands

- Start only the backend server:
  ```bash
  npm run server
  ```

- Start only the React client:
  ```bash
  npm run client
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Start production server:
  ```bash
  npm start
  ```

## Data Structure

### Products CSV Format (data/products.csv)
```csv
id,name,category,description,features,video_url,image_url
```

### Team CSV Format (data/team.csv)
```csv
id,name,title,bio,email,linkedin,homepage,image_url
```


## Technology Stack

- **Frontend**: React.js, CSS3
- **Backend**: Node.js, Express.js
- **Data Storage**: CSV files
- **Development Tools**: Nodemon, Concurrently
- **Package Manager**: npm
