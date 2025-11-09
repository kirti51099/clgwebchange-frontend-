// src/Pages/AlumniPage.jsx
import React from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText, Box } from "@mui/material";

export default function AlumniPage(){
  const items = [
    "Alumni mentoring & placement support",
    "Regular alumni meets & events",
    "Career guidance & entrepreneurship workshops",
    "Alumni success stories and achievements"
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Alumni / Careers</Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>Strengthening bonds between alumni and current students for mentoring and placements.</Typography>

      <Paper sx={{ p: 2 }}>
        <List>
          {items.map((it, i) => <ListItem key={i}><ListItemText primary={it} /></ListItem>)}
        </List>
      </Paper>

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" href="/alumni-register">Join Alumni Network</Button>
      </Box>
    </Container>
  );
}
