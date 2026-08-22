import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState('Employee');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save role to localStorage so the dashboard knows who is logging in
    localStorage.setItem('userRole', role);
    
    if (isSignUp) {
      // Mock the auto-generated ID requirement from the SRS
      const generatedId = "DAYFLOW-" + Math.floor(1000 + Math.random() * 9000);
      alert(`Registration successful! Your auto-generated Login ID is: ${generatedId}`);
    }
    
    // Redirect to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-purple-600">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Dayflow HRMS</h1>
          <p className="text-slate-500 mt-2">Every workday, perfectly aligned.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input type="text" required className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" placeholder="John Doe" />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-slate-700">Email Address</label>
            <input type="email" required className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" placeholder="you@company.com" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input type="password" required className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" placeholder="••••••••" />
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-slate-700">Role</label>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              >
                <option value="Employee">Employee</option>
                <option value="Admin">Admin / HR Officer</option>
              </select>
            </div>
          )}

          <button type="submit" className="w-full bg-blue-950 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition-colors mt-6">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-purple-600 font-semibold hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}