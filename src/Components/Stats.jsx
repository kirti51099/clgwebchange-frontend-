// src/components/Stats.jsx
import React from "react";
import { Paper, Grid, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Stats() {
  const items = [
    { icon: <SchoolIcon fontSize="large" color="primary" />, label: "Students", value: "4200+" },
    { icon: <WorkIcon fontSize="large" color="primary" />, label: "Avg Package", value: "₹6.2 LPA" },
    { icon: <EmojiEventsIcon fontSize="large" color="primary" />, label: "Programs", value: "20+" },
  ];

  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      <Grid container spacing={2}>
        {items.map((it, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Box>{it.icon}</Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>{it.value}</Typography>
                <Typography variant="caption" color="text.secondary">{it.label}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
