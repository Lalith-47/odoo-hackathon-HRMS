import { useState } from 'react';

export default function AdminView() {
  // Mock pending leave requests from the team
  const [requests, setRequests] = useState([
    { id: 1, name: 'Aditya', type: 'Sick', dates: 'Aug 24 - Aug 25', status: 'Pending' },
    { id: 2, name: 'Lalith', type: 'Paid', dates: 'Sep 01 - Sep 05', status: 'Pending' }
  ]);

  const handleAction = (id, action) => {
    setRequests(requests.filter(req => req.id !== id));
    alert(`Leave request ${action} successfully!`);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-red-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Admin Control Panel</h2>
      <p className="text-slate-500 mb-6">Manage employee leave approvals and records.</p>

      <h3 className="text-lg font-bold text-slate-800 mb-4">Pending Leave Requests</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 border-b-2 border-slate-200">
              <th className="p-4 font-semibold">Employee</th>
              <th className="p-4 font-semibold">Leave Type</th>
              <th className="p-4 font-semibold">Dates</th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-800">{req.name}</td>
                <td className="p-4 text-slate-600">{req.type}</td>
                <td className="p-4 text-slate-600">{req.dates}</td>
                <td className="p-4 space-x-2">
                  <button 
                    onClick={() => handleAction(req.id, 'Approved')} 
                    className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded shadow-sm transition"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => handleAction(req.id, 'Rejected')} 
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded shadow-sm transition"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-slate-500">All caught up! No pending requests.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}