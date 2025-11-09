// src/Pages/PlacementPage.jsx
import React from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText, Box } from "@mui/material";

export default function PlacementPage(){
  const highlights = [
    "Top recruiters: Infosys, TCS, Wipro, Capgemini, L&T",
    "Highest package (last year): ₹12 LPA",
    "Average package: ₹6.5 LPA",
    "Pre-placement training: aptitude, soft-skills, mock interviews"
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Training & Placement</Typography>

      <Typography color="text.secondary" sx={{ mb: 2 }}>
        The Training & Placement cell facilitates internships and campus recruitments with industry tie-ups.
      </Typography>

      <Paper sx={{ p: 2 }}>
        <List>
          {highlights.map((h, i) => (
            <ListItem key={i}>
              <ListItemText primary={h} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Contact</Typography>
        <Typography>placement@college.com</Typography>
        <Typography>Phone: +91 98765 43210</Typography>
      </Box>
    </Container>
  );
}
