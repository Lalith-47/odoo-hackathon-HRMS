# Dayflow — Human Resource Management System

*Every workday, perfectly aligned.*

## Overview

Dayflow is a full-stack HRMS built to digitize core HR operations — employee onboarding, profile management, attendance tracking, leave management, and live admin approval workflows for the Odoo Hackathon.

## Team

*   **Lalith** — Team Leader
*   **Likhitha R V** — Team Member
*   **Adithya** — Team Member

## Tech Stack

*   **Frontend:** React (Vite) + Tailwind CSS
*   **Backend:** Node.js + Express.js + MongoDB
*   **Version Control:** Git & GitHub

## Features

### Authentication & Authorization
*   ✅ Sign up / Sign in UI with role-based toggle
*   ✅ Auto-generated Login ID logic on registration
*   ✅ Backend: User registration, password hashing, and login API

### Dashboard & Profile
*   ✅ Employee & Admin dynamic routing based on role
*   ✅ Employee Profile UI (Personal, Job, Salary details)
*   ✅ Backend: Fetch user profile data

### Attendance Management
*   ✅ Daily/weekly attendance view UI
*   ✅ Check-in / Check-out toggle functionality
*   ✅ Backend: Store and fetch attendance timestamps

### Leave & Time-Off Management
*   ✅ Apply for leave form (Paid, Sick, Unpaid)
*   ✅ Admin approval/rejection control panel UI
*   ✅ Backend: Leave request submission and status update API

### Payroll/Salary Management
*   ✅ Read-only payroll view integrated into Employee Profile
*   ✅ Backend: Admin control over salary structure and accuracy

## Getting Started

To run the full-stack application locally:

### 1. Start the Backend
```bash
cd backend
npm install
npm run dev
`````
### 2. Start the Frontend (In a separate terminal)
```Bash
npm install
npm run dev
````
### Project Structure
```text
odoo-hackathon-HRMS/
├── backend/
│   ├── models.js
│   ├── server.js
│   └── package.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AdminView.jsx
│   │   ├── Attendance.jsx
│   │   ├── Profile.jsx
│   │   ├── Signin.jsx
│   │   └── TimeOff.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   └── index.css
└── README.md
