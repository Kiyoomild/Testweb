import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Forecast from "./components/Forecast";
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import Help from './components/Help';

import "./App.css";

function App() {
  return (
    <Router>
      <Grid container className="app-container">
        {/* Sidebar */}
        <Grid item className="sidebar">
          <Sidebar />
        </Grid>

        {/* Content Area */}
        <Grid item className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
