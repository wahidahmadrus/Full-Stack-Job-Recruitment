# Job Recruitment

A full-stack job recruitment web application where candidates can search job openings and employers can create and manage job posts.

The project includes a modern React frontend, an Express backend API, JWT authentication, password hashing, and MongoDB data storage.

## Features

- Search jobs by title, description, requirements, or location
- User signup and login
- Employer mode for posting jobs
- Create job listings with description, requirements, location, and apply link
- Delete job posts created by the logged-in employer
- Responsive modern recruitment website design
- Configurable API URL for deployment

## Tech Stack

**Frontend**

- React
- Vite
- React Router
- Axios
- Bootstrap

**Backend**

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv

## Project Structure

```text
FullstackJobRecruitment/
  backend/
    Controller/
    Model/
    package.json
    .env.example
  frontend/
    src/
    package.json
    .env.example
  netlify.toml
  README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/wahidahmadrus/Full-Stack-Job-Recruitment.git
cd Full-Stack-Job-Recruitment
```

Install backend dependencies:

```bash
cd backend
npm install
```

Create a backend `.env` file:

```bash
cp .env.example .env
```

Update the values:

```env
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-long-random-secret
PORT=3000
```

Start the backend:

```bash
npm start
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

Create a frontend `.env` file:

```bash
cp .env.example .env
```

For local development:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Build

Build the frontend for production:

```bash
cd frontend
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The frontend can be deployed to Netlify. This repository includes `netlify.toml`, configured to:

- Use `frontend` as the build base
- Run `npm run build`
- Publish `frontend/dist`
- Support React Router redirects

The backend should be deployed separately to a Node.js hosting provider such as Render, Railway, Fly.io, or a VPS.

After deploying the backend, add this environment variable in Netlify:

```env
VITE_API_URL=https://your-backend-url.example.com
```

Add these environment variables to your backend host:

```env
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-long-random-secret
PORT=3000
```

## Security Notes

- Do not commit `.env` files.
- Rotate database passwords if credentials were ever committed.
- Use a strong `JWT_SECRET` in production.
- Restrict MongoDB network access where possible.

## Author

Wahid Ahmad Rustaqi
