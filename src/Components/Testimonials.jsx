// src/components/Testimonials.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Testimonials({ items = [] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!items.length) return;
    const t = setInterval(() => setI(v => (v + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [items.length]);

  if (!items.length) return null;
  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: 800 }}>{items[i].author}</Typography>
        <Stack direction="row" spacing={1}>
          <IconButton size="small" onClick={() => setI((i - 1 + items.length) % items.length)}><ChevronLeftIcon /></IconButton>
          <IconButton size="small" onClick={() => setI((i + 1) % items.length)}><ChevronRightIcon /></IconButton>
        </Stack>
      </Stack>

      <Typography variant="body1" color="text.secondary" sx={{ mt: 1, fontStyle: "italic" }}>
        “{items[i].text}”
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        {items.map((_, idx) => (
          <Box key={idx} sx={{ width: 8, height: 8, borderRadius: 4, background: idx === i ? "primary.main" : "#d1d5db" }} />
        ))}
      </Stack>
    </Box>
  );
}
