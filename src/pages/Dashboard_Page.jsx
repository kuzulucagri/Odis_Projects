import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  IconButton,
  Badge,
  Grid,
  Paper,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import odisLogo from "../images/odis_logo.png";

const DashboardPage = () => {
  const menuItems = [
    { text: "Ana Sayfa", icon: <DashboardIcon /> },
    { text: "Öğrenciler", icon: <SchoolIcon /> },
    { text: "Sınavlar", icon: <AssignmentIcon /> },
    { text: "Mesaj Kutusu", icon: <MessageIcon /> },
    { text: "Ayarlar", icon: <SettingsIcon /> },
    { text: "Çıkış", icon: <ExitToAppIcon /> },
  ];

    const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f6fc" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          backgroundColor: "#1e1e2f",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: 4,
        }}
      >
        <Box>
          <Typography variant="h6" textAlign="center" mb={4}>
            MENÜ
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h6">User Hoca, Hoşgeldiniz...</Typography>
          <Box component="img" src={odisLogo} alt="ODIS Logo" sx={{ height: 80 }} />
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {/* Course Card */}
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">Online Dersler</Typography>
                <Typography color="text.secondary">Öğrenciler İçin</Typography>
              </CardContent>
            </Card>

            <Grid container spacing={2}>
              {[1, 2, 3].map((item) => (
                <Grid item xs={12} sm={4} key={item}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1">Kurs {item}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Açıklamalar buraya girilmeli
                      </Typography>
                      <LinearProgress variant="determinate" value={item * 25} sx={{ mt: 2 }} />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Sidebar Widgets */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">İlerleme</Typography>
                <Typography>%80 Tamamlandı</Typography>
                <LinearProgress variant="determinate" value={80} sx={{ mt: 1 }} />
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6">Haziran 2025</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                  {generateCalendarDays().map((day) => (
                    <Box
                      key={day}
                      sx={{
                        width: 32,
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        fontSize: 14,
                      }}
                    >
                      {day}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardPage;