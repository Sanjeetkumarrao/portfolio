const express   = require('express');
const cors      = require('cors');
const dotenv    = require('dotenv');
const path      = require('path');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler  = require('./middleware/errorHandler');

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({ 
  // origin: 'http://localhost:5173', 
  origin : "https://portfolio-xi-smoky-64.vercel.app/", 
  credentials: true }));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);
app.get('/api/health', (_req, res) => res.json({ status: 'ok', message: '🚀 API running' }));

// Serve React in production
if (process.env.NODE_ENV === 'production') {
  const dist = path.join(__dirname, '..', 'client', 'dist');
  app.use(express.static(dist));
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`\n🚀 Server: http://localhost:${PORT}`);
  console.log(`📦 Env: ${process.env.NODE_ENV || 'development'}\n`);
});
