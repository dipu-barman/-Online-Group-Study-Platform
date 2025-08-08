# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Online Study Group Platform

## Description  
An interactive full-stack web application that allows students to create, join, and manage study groups online.  
Users can share assignments, track progress, communicate in real-time, and collaborate effectively in a virtual study environment.

## Live Project Link  
🔗 [Live Demo](https://your-live-study-group-live-link.com)  
🔗 [GitHub Repository](https://github.com/your-username/your-study-group-repo)

## Technologies Used  
- Frontend: React.js, Tailwind CSS, DaisyUI, React Hook Form  
- Backend: Node.js, Express.js, MongoDB  
- Authentication: Firebase Authentication, JWT  
- State Management: React Context API, React Query  
- Others: Socket.IO (for real-time communication), Axios, React Router DOM

## Screenshot  
![Study Group Platform Screenshot](screenshot.png)  
*(Add a clear screenshot named `screenshot.png` to your repo)*

## Core Features  
- User registration and login with Firebase Authentication  
- Create and join study groups with customizable settings  
- Share and submit assignments with deadlines  
- Real-time chat and notifications within groups  
- Assignment grading and progress tracking for group members  
- Responsive and accessible UI with smooth animations  
- Protected routes and secure data management  
- Admin dashboard for managing groups and users

## Dependencies  
- react  
- react-dom  
- react-router-dom  
- tailwindcss  
- daisyui  
- firebase  
- axios  
- express  
- mongoose  
- react-hook-form  
- socket.io-client / socket.io  
- react-query  
- jwt-decode  
- framer-motion

## How to Run the Project Locally

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/your-study-group-repo.git
-Navigate into the project directory

bash
-Copy
-Edit
-cd your-study-group-repo
-Install frontend dependencies

bash
-Copy
-Edit
cd client
-npm install
-Install backend dependencies

bash
-Copy
Edit
cd ../server
npm install
-Set up environment variables

-Create .env files in both client and server folders

-Add Firebase config, MongoDB URI, JWT secrets, Socket.IO configs as required

-Start frontend development server

bash
-Copy
Edit
cd ../client
-npm start
-Start backend server

bash
-Copy
Edit
cd ../server
npm run dev
-Open your browser and visit

arduino
-Copy
Edit
-http://localhost:3000
