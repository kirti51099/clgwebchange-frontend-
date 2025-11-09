// src/Pages/AdmissionsPage.jsx
import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Button } from "@mui/material";

export default function AdmissionsPage(){
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Admissions & Apply</Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Apply online for UG & PG programmes. Check eligibility, important dates and required documents before applying.
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>Important points</Typography>
        <List>
          <ListItem><ListItemText primary="Eligibility as per AICTE / University norms" /></ListItem>
          <ListItem><ListItemText primary="Online application form — upload documents and photograph" /></ListItem>
          <ListItem><ListItemText primary="Application fee: ₹500 (non-refundable)" /></ListItem>
          <ListItem><ListItemText primary="Merit lists & counselling schedule will be published on the portal" /></ListItem>
        </List>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <Button variant="contained" size="large" href="/apply" sx={{ backgroundColor: "primary.main" }}>Apply Online</Button>
        <Button variant="outlined" size="large" href="/downloads">Admission Brochure</Button>
      </Box>
    </Container>
  );
}
