// src/components/NoticeCard.jsx
import React from "react";
import { Paper, Typography, Stack, Button } from "@mui/material";

export default function NoticeCard() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 800 }}>Notice Board</Typography>
      <Stack spacing={1} sx={{ mt: 2 }}>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" size="small">Students</Button>
          <Button variant="outlined" size="small">Staff</Button>
        </Stack>

        <Button variant="contained" color="secondary" sx={{ mt: 1, boxShadow: 3 }} fullWidth>
          Internal Notice for Students — View
        </Button>

        <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>Last updated: Oct 10, 2025</Typography>
      </Stack>
    </Paper>
  );
}
