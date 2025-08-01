const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Teams data
const teamsData = {
  "data": {
    "teamList": {
      "items": [
        {
          "_path": "/content/dam/gpoc/en/team-verticurl",
          "title": "Team Verticurl",
          "shortName": "teamverticurl",
          "description": {
            "plaintext": "This is from Team Verticurl"
          },
          "teamMembers": [
            {
              "fullName": "Vineet Kumar",
              "occupation": [
                "Artist"
              ]
            },
            {
              "fullName": "Nikhil Seth",
              "occupation": [
                "YouTuber"
              ]
            },
            {
              "fullName": "Manish Kumar",
              "occupation": [
                "Writer"
              ]
            },
            {
              "fullName": "Rajasekar Jayabalan",
              "occupation": [
                "Traveler"
              ]
            },
            {
              "fullName": "Joseph Ambrose",
              "occupation": [
                "Photographer"
              ]
            },
            {
              "fullName": "Sudhir Madaan",
              "occupation": [
                "Influencer"
              ]
            },
            {
              "fullName": "Gaurav Kumar",
              "occupation": [
                "Artist"
              ]
            }
          ]
        }
      ]
    }
  }
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Teams API Server is running',
    timestamp: new Date().toISOString()
  });
});

// Get all teams
app.get('/api/teams', (req, res) => {
  console.log('GET /api/teams - Returning all teams');
  res.json(teamsData);
});

// Get team by slug
app.get('/api/teams/:slug', (req, res) => {
  const { slug } = req.params;
  console.log(`GET /api/teams/${slug} - Looking for team with slug: ${slug}`);
  
  // Find the team by slug
  const team = teamsData.data.teamList.items.find(team => team.shortName === slug);

  if (!team) {
    console.log(`Team not found with slug: ${slug}`);
    return res.status(404).json({ 
      error: 'Team not found',
      message: `No team found with slug: ${slug}`,
      availableSlugs: teamsData.data.teamList.items.map(t => t.shortName)
    });
  }

  console.log(`Found team: ${team.title}`);
  // Return the team in the same format as the original response
  res.json({
    data: {
      teamList: {
        items: [team]
      }
    }
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Teams API Server',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      allTeams: '/api/teams',
      teamBySlug: '/api/teams/:slug'
    },
    availableTeams: teamsData.data.teamList.items.map(team => ({
      title: team.title,
      shortName: team.shortName,
      memberCount: team.teamMembers.length
    }))
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: `The endpoint ${req.originalUrl} does not exist`,
    availableEndpoints: [
      'GET /health',
      'GET /api/teams',
      'GET /api/teams/:slug'
    ]
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Teams API Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`👥 Teams endpoint: http://localhost:${PORT}/api/teams`);
  console.log(`🔍 Team detail endpoint: http://localhost:${PORT}/api/teams/:slug`);
  console.log(`📝 Available teams: ${teamsData.data.teamList.items.map(t => t.shortName).join(', ')}`);
});

module.exports = app; 