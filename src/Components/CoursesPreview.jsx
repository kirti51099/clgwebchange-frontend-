// src/components/CoursesPreview.jsx
import React, { useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import CourseCard from "./CourseCard.jsx";
import CourseModal from "./CourseModal.jsx";

export default function CoursesPreview({ courses = [] }) {
  const [selected, setSelected] = useState(null);

  return (
    <Box>
      <Grid container spacing={2}>
        {courses.map(c => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={c._id}>
            <CourseCard course={c} onDetails={() => setSelected(c)} />
          </Grid>
        ))}
      </Grid>

      {selected && <CourseModal course={selected} onClose={() => setSelected(null)} />}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
  variant="outlined"
  size="large"
  sx={{ mt: 2 }}
  onClick={() => (window.location.href = "/courses")}
>
  View All Courses →
</Button>

      </Box>
    </Box>
  );
}
