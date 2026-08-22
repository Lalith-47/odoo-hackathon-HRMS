import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Attendance from '../components/Attendance';
import TimeOff from '../components/TimeOff';

export default function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem('userRole') || 'Employee';
  
  // State to track which view is currently active
  const [activeView, setActiveView] = useState('overview');

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-blue-950 text-white flex flex-col justify-between shadow-xl">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-8">Dayflow</h2>
          <ul className="space-y-3 font-medium">
            <li 
              onClick={() => setActiveView('overview')}
              className={`p-3 rounded-lg cursor-pointer transition ${activeView === 'overview' ? 'bg-purple-700 shadow-sm text-white' : 'hover:bg-slate-800 text-slate-400'}`}
            >
              Dashboard
            </li>
            <li className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer transition text-slate-400">Profile</li>
            <li 
              onClick={() => setActiveView('attendance')}
              className={`p-3 rounded-lg cursor-pointer transition ${activeView === 'attendance' ? 'bg-purple-700 shadow-sm text-white' : 'hover:bg-slate-800 text-slate-400'}`}
            >
              Attendance
            </li>
            <li 
              onClick={() => setActiveView('timeoff')}
              className={`p-3 rounded-lg cursor-pointer transition ${activeView === 'timeoff' ? 'bg-purple-700 shadow-sm text-white' : 'hover:bg-slate-800 text-slate-400'}`}
            >
              Time Off
            </li>
          </ul>
        </div>
        <div className="p-6">
          <button 
            onClick={handleLogout} 
            className="w-full py-2.5 bg-slate-800 hover:bg-red-600 rounded-lg text-sm font-semibold transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-10 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome to Dayflow</h1>
          <p className="text-slate-500 font-medium">Logged in as: <span className="text-purple-600">{role}</span></p>
        </header>

        {/* Dynamic Content Rendering */}
        {activeView === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-purple-500 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-slate-800 mb-2">My Profile</h3>
              <p className="text-sm text-slate-500">View your personal, job, and salary details.</p>
            </div>
            
            <div 
              onClick={() => setActiveView('attendance')}
              className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2">Attendance</h3>
              <p className="text-sm text-slate-500">Check-in, check-out, and view daily records.</p>
            </div>
            
            <div 
              onClick={() => setActiveView('timeoff')}
              className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-400 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2">Leave Requests</h3>
              <p className="text-sm text-slate-500">Apply for time off and track approval status.</p>
            </div>
          </div>
        )}

        {activeView === 'attendance' && <Attendance />}
        {activeView === 'timeoff' && <TimeOff />}
        
      </div>
    </div>
  );
}