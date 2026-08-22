import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<div className="p-10 text-2xl font-bold">Dashboard Coming Soon...</div>} />
      </Routes>
    </Router>
  );
}