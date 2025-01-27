import React, { useState } from "react";
import { IconButton, Badge, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";

const NotificationPanel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [notifications] = useState([
    "Nuevo mensaje de cliente",
    "Actualización de sistema disponible",
    "Tienes una reunión en 30 minutos",
  ]);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <div>
     
      <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

     
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div
          style={{
            width: 300,
            padding: 20,
          }}
        >
          <h3>Notificaciones</h3>
          <List>
            {notifications.length === 0 ? (
              <ListItem>
                <ListItemText primary="No hay notificaciones" />
              </ListItem>
            ) : (
              notifications.map((notification, index) => (
                <ListItem key={index}>
                  <ListItemText primary={notification} />
                </ListItem>
              ))
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NotificationPanel;