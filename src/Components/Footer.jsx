// src/components/Footer.jsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.dark", color: "#e9f2ff", py: 4, mt: 6 }}>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
        <Box>
          <Typography variant="h6">DY Patil College of Engineering & Technology</Typography>
          <Typography variant="body2" sx={{ opacity: 0.85 }}>Shaping engineers since 19XX</Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2">Contact</Typography>
          <Typography variant="body2">info@dypcet.edu.in</Typography>
          <Typography variant="body2">+91 12345 67890</Typography>
        </Box>
      </Container>
    </Box>
  );
}
