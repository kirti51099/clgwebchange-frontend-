// src/Pages/Home.jsx
import React from "react";
import { Container, Grid, Box, Paper, Typography, Button, Stack } from "@mui/material";

import Hero from "../Components/HeroSection.jsx";
import Stats from "../Components/Stats.jsx";
import CoursesPreview from "../Components/CoursesPreview.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import FacultyStrip from "../Components/FacultyStrip.jsx";
import NoticeBoard from "../Components/NoticeBoard.jsx";
import QuickLinksSmart from "../Components/QuickLinksSmart.jsx";
import RecruitersStrip from "../Components/RecruitersStrip.jsx";

export default function Home() {
  // SAMPLE DATA (replace with API)
  const courses = [
    { _id: "c1", title: "B.Tech - Computer Engineering", department: "Computer", duration: "4 years", description: "Algorithms, web, mobile, AI, industry projects." },
    { _id: "c2", title: "B.Tech - Mechanical Engineering", department: "Mechanical", duration: "4 years", description: "Design, manufacturing, robotics and labs." },
    { _id: "c3", title: "B.Tech - E & TC", department: "E&TC", duration: "4 years", description: "Embedded systems, communications and IoT." },
  ];

  const testimonials = [
    { text: "Excellent faculty and strong placement support.", author: "A. Student (2024)" },
    { text: "Great labs and industry projects.", author: "B. Alumni (2022)" },
    { text: "Placements helped me land my dream job.", author: "C. Student (2023)" },
  ];

  const staff = [
    // empty = hide faculty section
    // { name: "Dr. A Sharma", department: "Computer", photo: "/assets/react.svg" }
  ];

  const notices = [
    { id: 1, title: "Exam schedule released", date: "2025-10-15", type: "student" },
    { id: 2, title: "Staff meeting on 20 Oct", date: "2025-10-10", type: "staff" },
    { id: 3, title: "Admissions open for 2026", date: "2025-09-30", type: "student" },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Hero />

      <Box sx={{ mt: 4}}>
        <QuickLinksSmart/>
      </Box>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        {/* Left column: main content */}
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>Featured Programs</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Quick view of popular programs. Click details for syllabus & apply options.
              </Typography>
              <CoursesPreview courses={courses} />
            </Paper>

            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Testimonials</Typography>
              <Testimonials items={testimonials} />
            </Paper>

            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Recruiters & Partners</Typography>
              <RecruitersStrip logos={["/assets/logo1.png","/assets/logo2.png","/assets/logo3.png"]} />
            </Paper>
          </Stack>
        </Grid>

        {/* Right column: quick links, notices, event */}
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            {/* Improved Quick Links (cards on desktop, stacked buttons on mobile) */}
            <QuickLinksSmart />

            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>Notices</Typography>
              <Box sx={{ mt: 2 }}>
                <NoticeBoard notices={notices} />
              </Box>
            </Paper>

            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>Upcoming Event</Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>Tech Fest 2025 — 2-day hackathon & workshops.</Typography>
              <Button variant="contained" sx={{ mt: 2 }} href="/events">Register</Button>
            </Paper>
          </Stack>
        </Grid>
      </Grid>

      {/* Faculty - only show if staff data exists */}
      {staff && staff.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Our Faculty</Typography>
          <FacultyStrip staff={staff} />
        </Box>
      )}

      {/* CTA footer banner */}
      <Box sx={{ mt: 6 }}>
        <Paper sx={{ p: 3, display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: 3 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>Ready to join?</Typography>
            <Typography color="text.secondary">Apply now for the upcoming intake or talk to admissions.</Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large" href="/admission">Apply Now</Button>
            <Button variant="outlined" size="large" href="/contact">Contact</Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
