// src/components/FacultyStrip.jsx
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function FacultyStrip({ staff = [] }) {
  return (
    <Box sx={{ overflowX: "auto", display: "flex", gap: 2, px: 1, py: 1, scrollSnapType: "x mandatory" }}>
      {staff.map((f, idx) => (
        <Card key={idx} sx={{ minWidth: 220, scrollSnapAlign: "center", borderRadius: 2, boxShadow: 3 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <img src={f.photo} alt={f.name} style={{ width: 96, height: 96, borderRadius: 60, objectFit: "cover", marginBottom: 8 }} />
            <Typography sx={{ fontWeight: 700 }}>{f.name}</Typography>
            <Typography variant="caption" color="text.secondary">{f.department}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
