// src/Pages/NoticesPage.jsx
import React from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

export default function NoticesPage(){
  const sample = [
    { title: "FY Orientation: 15 Nov, 10:00 AM", date: "2025-11-15" },
    { title: "Internal Exam Timetable Released", date: "2025-10-20" },
    { title: "Sports Week Registration Open", date: "2025-10-10" },
    { title: "Placement Drive for CSE (25 Nov)", date: "2025-11-25" },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Notice Board</Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Latest student and staff notices, circulars and announcements.
      </Typography>

      <Paper sx={{ p: 2 }}>
        <List>
          {sample.map((n, i) => (
            <ListItem key={i}>
              <ListItemText primary={n.title} secondary={n.date} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
