# Dayflow — Human Resource Management System

Every workday, perfectly aligned.

## Overview

Dayflow is an HRMS built to digitize core HR operations — employee onboarding,
profile management, attendance tracking, leave management, payroll visibility,
and approval workflows for admins and HR officers.

## Team

- Lalith — Team Leader
- Likhitha — Team Member
- Aditya — Team Member

## Tech Stack

- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express.js + MongoDB
- Version Control: Git + GitHub

## Features

### Authentication & Authorization
- [x] Sign up / Sign in UI with role-based toggle
- [x] Auto-generated Login ID logic on registration
- [ ] Backend: User registration, password hashing, and login API

### Dashboard & Profile
- [x] Employee & Admin dynamic routing based on role
- [x] Employee Profile UI (Personal, Job, Salary details)
- [ ] Backend: Fetch user profile data

### Attendance Management
- [x] Daily/weekly attendance view UI
- [x] Check-in / Check-out toggle functionality
- [ ] Backend: Store and fetch attendance timestamps

### Leave & Time-Off Management
- [x] Apply for leave form (Paid, Sick, Unpaid)
- [x] Admin approval/rejection control panel UI
- [ ] Backend: Leave request submission and status update API

### Payroll/Salary Management
- [x] Read-only payroll view integrated into Employee Profile
- [ ] Backend: Admin control over salary structure and payroll accuracy

## Getting Started

To run the frontend client locally:
\`\`\`bash
npm install
npm run dev
\`\`\`

## Project Structure

\`\`\`text
odoo-hackathon-HRMS/
├── src/
│   ├── components/
│   │   ├── AdminView.jsx
│   │   ├── Attendance.jsx
│   │   ├── Profile.jsx
│   │   ├── SignIn.jsx
│   │   └── TimeOff.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   └── App.jsx
├── public/
└── README.md
\`\`\`

## License

Built for Odoo Hackathon x NMIT Bangalore — 2026