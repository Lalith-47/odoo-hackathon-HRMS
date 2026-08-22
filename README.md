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
- Backend: TBD
- Version Control: Git + GitHub

## Features

### Authentication & Authorization
- Sign up / Sign in with role-based access (Admin / HR Officer / Employee)
- Auto-generated Login ID on registration

### Dashboard
- Employee: quick-access cards for Profile, Attendance, Time Off
- Admin/HR: employee list, attendance records, leave approvals

### Employee Profile Management
- View personal, job, salary, and document details
- Edit limited fields (employee) / full edit access (admin)

### Attendance Management
- Daily/weekly attendance view
- Check-in / Check-out
- Status tracking: Present, Absent, Half-day, Leave

### Leave & Time-Off Management
- Apply for leave (Paid, Sick, Unpaid)
- Approve/reject workflow for Admin/HR
- Status tracking: Pending, Approved, Rejected

### Payroll/Salary Management
- Read-only payroll view for employees
- Admin control over salary structure and payroll accuracy

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Project Structure

\`\`\`
odoo-hackathon-HRMS/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── public/
└── README.md
\`\`\`

## License

Built for Odoo Hackathon x NMIT Bangalore — 2026