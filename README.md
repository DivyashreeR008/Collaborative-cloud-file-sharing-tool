# Collaborative Cloud File Sharing Tool

A web-based platform for students to securely share files, track versions, and collaborate in real time. Includes chat, activity monitoring, deadline alerts, and AI support for coding.

## Tech Stack

- **Frontend:** React (Create React App)
- **Backend:** Node.js, Express, Socket.io
- **Database:** PostgreSQL (via Sequelize ORM)
- **Real-time:** Socket.io for live collaboration

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL 14+

### Setup

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server && npm install && cd ..

# Set up PostgreSQL database
createdb ccfst

# Start both server and client
npm run dev
```

- **Server:** http://localhost:5000
- **Client:** http://localhost:3000

## Project Structure

```
├── server/
│   ├── index.js           Express + Socket.io entry point
│   ├── config/database.js Sequelize configuration
│   ├── models/            Database models (User, File, Project)
│   └── routes/            API routes (auth, files, projects)
├── client/                React frontend (CRA)
└── package.json           Root package with dev script
```

## Environment Variables

Create `server/.env`:

```
PORT=5000
DB_NAME=ccfst
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
```

## Features

- File upload & version tracking
- Real-time collaboration via WebSockets
- Project-based file organization
- User roles (student, instructor, admin)
- Deadline alerts & activity monitoring
