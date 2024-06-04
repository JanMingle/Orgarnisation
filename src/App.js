import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidenav from './components/Sidenav';  // Update the import statement to match the filename
import Dashboard from './components/Dashboard';
import BursaryPrograms from './components/BursaryPrograms';
import Donations from './components/Donations';
import ApplicationReview from './components/ApplicationReview';
import ReportingAnalytics from './components/ReportingAnalytics';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidenav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bursary-programs" element={<BursaryPrograms />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/application-review" element={<ApplicationReview />} />
            <Route path="/reporting-analytics" element={<ReportingAnalytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
