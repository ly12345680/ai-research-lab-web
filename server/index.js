const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: true, // Allow all origins for development
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// Function to read CSV data
const readCSV = (filename) => {
  return new Promise((resolve, reject) => {
    const results = [];
    const filePath = path.join(__dirname, '../data', filename);
    
    if (!fs.existsSync(filePath)) {
      reject(new Error(`File ${filename} not found`));
      return;
    }

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

// API Routes
app.get('/api/products', async (req, res) => {
  try {
    const products = await readCSV('products.csv');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load products data' });
  }
});

app.get('/api/team', async (req, res) => {
  try {
    const team = await readCSV('team.csv');
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load team data' });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await readCSV('products.csv');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load products data' });
  }
});

app.get('/team', async (req, res) => {
  try {
    const team = await readCSV('team.csv');
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load team data' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
