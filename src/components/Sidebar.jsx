import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CloudIcon from "@mui/icons-material/Cloud";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
        CLIMATIC FLOW
      </Typography>
      <List>
        <ListItemButton selected>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><CloudIcon /></ListItemIcon>
          <ListItemText primary="Forecast" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItemButton>
      </List>
      <List sx={{ mt: "auto" }}>
        <ListItemButton>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Help" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
