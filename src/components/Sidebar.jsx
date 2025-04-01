import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CloudIcon from "@mui/icons-material/Cloud";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Sidebar = () => {
  const navigate = useNavigate(); // ✅ ใช้ useNavigate สำหรับการเปลี่ยนหน้า

  return (
    <Drawer variant="permanent">
      <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
        CLIMATIC FLOW
      </Typography>
      <List>
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/forecast")}> {/* ✅ Navigate ไป Forecast */}
          <ListItemIcon><CloudIcon /></ListItemIcon>
          <ListItemText primary="Forecast" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/notifications")}>
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItemButton>
      </List>
      <List sx={{ mt: "auto" }}>
        <ListItemButton onClick={() => navigate("/settings")}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/help")}>
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Help" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
