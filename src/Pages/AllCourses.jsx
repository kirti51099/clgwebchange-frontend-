import React from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import CourseCard from "../Components/CourseCard.jsx";

export default function AllCourses() {
  // Later this can be replaced with API (from backend)
  const courses = [
    { _id: "c1", title: "B.Tech - Computer Engineering", department: "Computer", duration: "4 years", description: "AI, Data science, Mobile apps" },
    { _id: "c2", title: "B.Tech - Mechanical Engineering", department: "Mechanical", duration: "4 years", description: "Robotics, Automation" },
    { _id: "c3", title: "B.Tech - Civil Engineering", department: "Civil", duration: "4 years", description: "Construction, AutoCAD" },
    { _id: "c4", title: "B.Tech - Electrical Engineering", department: "Electrical", duration: "4 years", description: "Power systems, PLC programming" },
    { _id: "c5", title: "MBA", department: "Management", duration: "2 years", description: "Business, HR, Marketing" },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
        All Courses
      </Typography>

      <Grid container spacing={3}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course._id}>
            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <CourseCard course={course} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
