// src/components/RecruitersStrip.jsx
import React from "react";
import { Box } from "@mui/material";

export default function RecruitersStrip({ logos = [] }) {
  if (!logos.length) {
    // sample placeholders if none passed
    logos = ["/assets/logo-placeholder-1.png", "/assets/logo-placeholder-2.png", "/assets/logo-placeholder-3.png"];
  }
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "auto", py: 1 }}>
      {logos.map((l, i) => (
        <Box key={i} sx={{ minWidth: 120, display: "flex", alignItems: "center", justifyContent: "center", p: 1, background: "#fff", borderRadius: 1, boxShadow: 1 }}>
          <img src={l} alt={`logo-${i}`} style={{ maxWidth: 100, maxHeight: 50 }} loading="lazy" />
        </Box>
      ))}
    </Box>
  );
}
