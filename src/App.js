import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import TeacherPage from "./pages/Teacher_Page";
import ParentPage from "./pages/Parent_Page";
import StudentPage from "./pages/Student_Page";
import DashboardPage from "./pages/Dashboard_Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/parent" element={<ParentPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
