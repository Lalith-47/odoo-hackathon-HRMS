import { useState } from 'react';

export default function Attendance() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);

  const handleToggle = () => {
    if (!isCheckedIn) {
      setCheckInTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }
    setIsCheckedIn(!isCheckedIn);
  };

  // Mock data for the daily/weekly view
  const recentRecords = [
    { date: 'Aug 21, 2026', checkIn: '09:05 AM', checkOut: '05:00 PM', status: 'Present' },
    { date: 'Aug 20, 2026', checkIn: '09:00 AM', checkOut: '05:15 PM', status: 'Present' },
    { date: 'Aug 19, 2026', checkIn: '--', checkOut: '--', status: 'Leave' },
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Attendance Tracker</h2>
          <p className="text-slate-500">Manage your daily check-ins and check-outs.</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-500 mb-2">Current Status</p>
          <button 
            onClick={handleToggle}
            className={`px-8 py-3 rounded-lg font-bold text-white shadow-md transition-all ${
              isCheckedIn ? 'bg-red-500 hover:bg-red-600' : 'bg-emerald-500 hover:bg-emerald-600'
            }`}
          >
            {isCheckedIn ? 'Check Out' : 'Check In'}
          </button>
          {isCheckedIn && (
            <p className="text-xs text-slate-400 mt-2">Checked in at {checkInTime}</p>
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Records</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 border-b-2 border-slate-200">
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Check In</th>
              <th className="p-4 font-semibold">Check Out</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentRecords.map((record, index) => (
              <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-800">{record.date}</td>
                <td className="p-4 text-slate-600">{record.checkIn}</td>
                <td className="p-4 text-slate-600">{record.checkOut}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    record.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}