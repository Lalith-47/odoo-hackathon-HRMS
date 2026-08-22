export default function Profile() {
  // Mock user data
  const user = {
    name: "John Doe",
    id: "EMP-2026",
    email: "john.doe@company.com",
    phone: "+91 98765 43210",
    role: "Software Engineer",
    department: "Engineering",
    joinDate: "Jan 15, 2024",
    salary: "₹12,00,000 / year",
    status: "Active"
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-purple-500 flex items-center gap-6">
        <div className="h-24 w-24 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-3xl font-bold">
          JD
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{user.name}</h2>
          <p className="text-slate-500 font-medium">{user.role} • {user.department}</p>
          <span className="mt-2 inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
            {user.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500">Email Address</p>
              <p className="font-medium text-slate-800">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Phone Number</p>
              <p className="font-medium text-slate-800">{user.phone}</p>
            </div>
          </div>
        </div>

        {/* Job & Salary Details */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Employment Details</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Employee ID</p>
                <p className="font-medium text-slate-800">{user.id}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Date of Joining</p>
                <p className="font-medium text-slate-800">{user.joinDate}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500">Salary Structure</p>
              <p className="font-medium text-slate-800">{user.salary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}