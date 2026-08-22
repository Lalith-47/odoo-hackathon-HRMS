import { useState } from 'react';

export default function TimeOff() {
  const [leaveType, setLeaveType] = useState('Paid');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [remarks, setRemarks] = useState('');

  // Mock data for existing leave requests
  const [requests, setRequests] = useState([
    { id: 1, type: 'Sick', start: 'Aug 10, 2026', end: 'Aug 11, 2026', status: 'Approved', remarks: 'Fever' },
    { id: 2, type: 'Paid', start: 'Jul 01, 2026', end: 'Jul 05, 2026', status: 'Approved', remarks: 'Family vacation' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: requests.length + 1,
      type: leaveType,
      start: startDate || 'Pending Date',
      end: endDate || 'Pending Date',
      status: 'Pending',
      remarks: remarks || 'None'
    };
    
    // Add the new request to the top of the list
    setRequests([newRequest, ...requests]);
    
    // Reset form
    setStartDate('');
    setEndDate('');
    setRemarks('');
    alert("Leave request submitted successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Leave Request Form */}
      <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-indigo-400">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Apply for Time Off</h2>
        <p className="text-slate-500 mb-6">Submit a new leave request for HR approval.</p>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Leave Type</label>
            <select 
              value={leaveType} 
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="Paid">Paid Leave</option>
              <option value="Sick">Sick Leave</option>
              <option value="Unpaid">Unpaid Leave</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
              <input 
                type="date" 
                required
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
              <input 
                type="date" 
                required
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Remarks (Optional)</label>
            <textarea 
              rows="2"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Reason for leave..."
            ></textarea>
          </div>

          <div className="md:col-span-2 text-right">
            <button 
              type="submit"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>

      {/* Leave Request History */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Request History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b-2 border-slate-200">
                <th className="p-4 font-semibold">Type</th>
                <th className="p-4 font-semibold">Date Range</th>
                <th className="p-4 font-semibold">Remarks</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">{req.type}</td>
                  <td className="p-4 text-slate-600">{req.start} to {req.end}</td>
                  <td className="p-4 text-slate-600 truncate max-w-xs">{req.remarks}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      req.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 
                      req.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}