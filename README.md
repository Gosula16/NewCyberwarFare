# 🌟 Feedback Web Application

A full-stack web application where users can submit feedback. Built with React (frontend), Node.js/Express (backend), and MongoDB (database). The project includes form validation, timestamps, and clean responsive styling using Tailwind CSS.

## 📁 Project Structure

CyberWarFare/
├── feedback-app/ # Frontend (React)
├── feedback-backend/ # Backend (Node.js/Express)
└── README.md



## 🔧 Features

- 📝 Submit feedback via a user-friendly form.
- 📋 View all submitted feedback.
- ✅ Form validation for name, email, and message.
- 📅 Timestamps for every feedback entry.
- 🎨 Clean and professional UI using TailwindCSS.
- 🌐 Hosted on a cloud platform.

## 🚀 Live Demo

🔗 [Live App Link](https://cwf-frontend.vercel.app/)  


## 🛠️ Technologies Used

**Frontend:**
- React
- Tailwind CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose)

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/CyberWarFare.git
cd CyberWarFare
```
### 2. Setup Backend
```bash
cd feedback-backend
npm install
```
### Create a .env file in feedback-backend/ and add:
```bash
PORT=5000
MONGO_URI=your-mongodb-connection-uri
```

MONGO_URI=mongodb+srv://venky:venky123@cluster0.fbqkaj7.mongodb.net/feedback-app?retryWrites=true&w=majority&appName=Cluster0
### Start the backend:
``` bash
npm start
```
Start the frontend:
```bash
npm start
```
## Visit http://localhost:3000 to use the app locally.


📦 Deployment Instructions
You can deploy this project using any of the following services:

Frontend: Vercel, Netlify

Backend: Render, Railway, Heroku

Database: MongoDB Atlas

📌 API Endpoints
| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| POST   | `/feedback` | Submit feedback       |
| GET    | `/feedback` | Retrieve all feedback |
