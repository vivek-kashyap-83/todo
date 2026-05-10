# 📌 MERN Todo App - Project Structure

## 📁 Frontend (React - client)

client/
├── public/
│   └── index.html
│
├── src/
│   ├── assets/              # Images, icons, fonts
│   │
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Button, Input, Modal, Loader
│   │   ├── layout/          # Sidebar, Navbar, Header
│   │   ├── tasks/           # TaskItem, TaskList, TaskForm
│   │   └── projects/        # ProjectItem, ProjectList
│   │
│   ├── pages/               # Route-level components
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── NotFound.jsx
│   │
│   ├── hooks/               # Custom hooks
│   │   ├── useAuth.js
│   │   ├── useTasks.js
│   │   └── useProjects.js
│   │
│   ├── context/             # Global state (Context API)
│   │   ├── AuthContext.js
│   │   ├── TaskContext.js
│   │   └── ProjectContext.js
│   │
│   ├── services/            # API calls
│   │   ├── api.js           # Axios instance
│   │   ├── authService.js
│   │   ├── taskService.js
│   │   └── projectService.js
│   │
│   ├── utils/               # Helper functions
│   │   ├── formatDate.js
│   │   ├── constants.js
│   │   └── validators.js
│   │
│   ├── routes/              # Route configuration
│   │   └── AppRoutes.jsx
│   │
│   ├── styles/              # Global styles
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── vite.config.js


---

## 📁 Backend (Node.js + Express - server)

server/
├── config/
│   ├── db.js               # MongoDB connection
│   └── env.js
│
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── projectController.js
│
├── models/
│   ├── User.js
│   ├── Task.js
│   └── Project.js
│
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── projectRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── services/              # Business logic layer (optional)
│   ├── taskService.js
│   └── projectService.js
│
├── utils/
│   └── generateToken.js
│
├── server.js
├── .env
└── package.json


---

## 🗄️ Database (MongoDB Collections)

- users
- tasks
- projects


---

## 🔥 Key Features

### ✅ Tasks
- title
- description
- status (active / completed)
- priority (low / medium / high)
- dueDate
- projectId

### 📁 Projects
- name (Personal, Work, Shopping)
- color / tag

### 🔍 Filters & Sorting
- All / Active / Completed
- Priority filtering
- Due date sorting


---

## 🚀 Optional Enhancements

- Redux Toolkit (for scalable state management)
- React Query / TanStack Query (for server state)
- Drag & Drop (task reordering)
- Dark mode toggle 🌙
- Notifications system 🔔