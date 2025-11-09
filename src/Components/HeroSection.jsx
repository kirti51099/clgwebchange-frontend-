// src/components/Hero.jsx
import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Stack } from "@mui/material";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <Card elevation={3} sx={{ display: "flex", gap: 2, p: 2, borderRadius: 3 }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h3" component="h1" sx={{ color: "primary.main", fontWeight: 800 }}>
          D.Y. Patil College of Engineering & Technology
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
          Empowering students with knowledge, innovation, and real-world skills. Join our community and build a future-ready career.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button variant="contained" size="large" color="primary" href="/admission">Apply Now</Button>
          <Button variant="outlined" size="large" color="primary" href="/virtual-tour">Virtual Tour</Button>
        </Stack>
      </CardContent>

      <CardMedia
        component="img"
        sx={{ width: { xs: 120, sm: 220, md: 360 }, borderRadius: 2, objectFit: "cover", filter: "brightness(0.92)" }}
        image={heroImg}
        alt="college campus"
      />
    </Card>
  );
}
