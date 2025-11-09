// src/components/CourseCard.jsx
import React from "react";
import { Card, CardContent, Typography, Chip, Stack, Button } from "@mui/material";

export default function CourseCard({ course, onDetails }) {
  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "primary.main" }}>{course.title}</Typography>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
          <Chip label={course.department} size="small" />
          <Typography variant="caption" color="text.secondary">{course.duration}</Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, minHeight: 54 }}>
          {course.description}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button size="small" variant="contained" onClick={onDetails}>Details</Button>
          <Button size="small" variant="outlined" href="/admission">Apply</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
