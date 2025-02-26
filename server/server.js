const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Church Website API' });
});

// Events endpoint
app.get('/api/events', (req, res) => {
  const events = [
    {
      id: 1,
      title: 'Sunday Service',
      date: '2024-01-21',
      time: '9:00 AM',
      description: 'Weekly Sunday morning service'
    },
    {
      id: 2,
      title: 'Bible Study',
      date: '2024-01-24',
      time: '7:00 PM',
      description: 'Weekly Bible study session'
    }
  ];
  res.json(events);
});

// Sermons endpoint
app.get('/api/sermons', (req, res) => {
  const sermons = [
    {
      id: 1,
      title: 'Walking in Faith',
      date: '2024-01-14',
      speaker: 'Pastor John',
      videoUrl: 'https://example.com/sermon1'
    },
    {
      id: 2,
      title: 'Power of Prayer',
      date: '2024-01-07',
      speaker: 'Pastor Sarah',
      videoUrl: 'https://example.com/sermon2'
    }
  ];
  res.json(sermons);
});

// Church info endpoint
app.get('/api/church-info', (req, res) => {
  const churchInfo = {
    name: 'Grace Community Church',
    address: '123 Faith Street',
    phone: '(555) 123-4567',
    email: 'info@gracechurch.com',
    serviceTimes: {
      sunday: ['9:00 AM', '11:00 AM'],
      wednesday: ['7:00 PM']
    }
  };
  res.json(churchInfo);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});