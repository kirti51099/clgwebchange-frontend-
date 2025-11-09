// src/Pages/DownloadsPage.jsx
import React from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText, Button, Box } from "@mui/material";

export default function DownloadsPage(){
  const downloads = [
    { title: "College Prospectus (2024-25)", href: "#" },
    { title: "Fee Structure (UG / PG)", href: "#" },
    { title: "Academic Calendar", href: "#" },
    { title: "Placement Report", href: "#" },
    { title: "Hostel & Mess Form", href: "#" },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Prospectus & Downloads</Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Download college prospectus, fee structure, placement report and academic calendar in PDF format.
      </Typography>

      <Paper sx={{ p: 2 }}>
        <List>
          {downloads.map((d, idx) => (
            <ListItem key={idx} secondaryAction={
              <Button size="small" variant="contained" href={d.href}>Download</Button>
            }>
              <ListItemText primary={d.title} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Box sx={{ mt: 3 }}>
        <Typography variant="caption" color="text.secondary">Note: PDFs open in a new tab.</Typography>
      </Box>
    </Container>
  );
}
