import { useState, useEffect } from 'react';

export default function TimeOff() {
  const [leaveType, setLeaveType] = useState('Paid');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [remarks, setRemarks] = useState('');
  const [loading, setLoading] = useState(false);

  // Leave requests state fetched from backend
  const [requests, setRequests] = useState([]);

  // Fetch existing requests on load
  useEffect(() => {
    fetch('http://localhost:5000/api/leaves')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRequests(data);
        }
      })
      .catch(err => console.error('Error fetching leaves:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newRequest = {
      userId: '60c72b2f9b1d8b2d88f3e211',
      name: 'Likhitha R V', // Fixed with proper string quotes
      leaveType,
      startDate: startDate || 'Pending Date',
      endDate: endDate || 'Pending Date',
      remarks: remarks || 'None',
      status: 'Pending'
    };
    
    try {
      const response = await fetch('http://localhost:5000/api/leaves', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRequest)
      });

      if (response.ok) {
        const savedData = await response.json();
        setRequests([savedData.leave || newRequest, ...requests]);
        
        setStartDate('');
        setEndDate('');
        setRemarks('');
        alert("Leave request submitted successfully to MongoDB!");
      } else {
        alert("Failed to submit leave request.");
      }
    } catch (err) {
      console.error('Network error:', err);
      alert("Network error: Is your backend server running?");
    } finally {
      setLoading(false);
    }
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
              disabled={loading}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition-colors"
            >
              {loading ? 'Submitting...' : 'Submit Request'}
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
                <tr key={req._id || req.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">{req.leaveType || req.type}</td>
                  <td className="p-4 text-slate-600">{req.startDate || req.start} to {req.endDate || req.end}</td>
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
              {requests.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-slate-500">No leave requests found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}