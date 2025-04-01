import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <Grid container className="app-container">
      <Grid item className="sidebar">
        <Sidebar />
      </Grid>
      <Grid item className="dashboard">
        <Dashboard />
      </Grid>
    </Grid>
  );
}

export default App;
