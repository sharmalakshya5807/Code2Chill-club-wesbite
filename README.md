# Code2Chill Club Website

Official web platform for **Code2Chill**, our university coding club. Designed to showcase projects, club events, announcements, and foster collaborative development among student programmers.

---

## 🚀 Tech Stack

- **Frontend:**
  - [React](https://react.dev/) (UI Library)
  - [Vite](https://vite.dev/) (Build tool & dev server)
  - [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS styling)
- **Backend:**
  - [Node.js](https://nodejs.org/) (JavaScript runtime)
  - [Express](https://expressjs.com/) (Web framework)
  - [CORS](https://www.npmjs.com/package/cors) & [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Repository Structure

```text
code2chill-club-website/
├── frontend/                # React + Vite client
│   ├── public/              # Static assets
│   ├── src/                 # Application source code
│   │   ├── App.jsx          # Root component
│   │   ├── index.css        # Tailwind CSS imports
│   │   └── main.jsx         # React DOM entry point
│   ├── package.json
│   └── vite.config.js       # Vite configuration with Tailwind plugin
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   └── index.js         # Express server & API routes
│   ├── .env.example         # Example environment variables
│   └── package.json
├── .gitignore               # Monorepo ignore rules
└── README.md                # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (or yarn/pnpm)

---

### 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend server will run on `http://localhost:5000`. You can verify health via:
```bash
curl http://localhost:5000/api/health
```

---

### 2. Frontend Setup

In a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

The frontend development server will launch at `http://localhost:5173`.

---

## 🌿 Branching Strategy

- `main` - Stable, production-ready code.
- `frontend` - Frontend development and UI features.
- `backend` - Backend API endpoints and server logic.
- `readme` - Documentation updates and guides.
