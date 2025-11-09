import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
} from "@mui/material";

// ICONS
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WorkIcon from "@mui/icons-material/Work";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PhoneIcon from "@mui/icons-material/Call";
import FlagIcon from "@mui/icons-material/Flag";
import GroupsIcon from "@mui/icons-material/Groups";

const QuickLinksSmart = () => {
  const quickLinksData = [
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Admissions & Apply",
      subtitle: "Online admission portal for First Year & Direct Second Year programs.",
      details: [
        "Eligibility criteria as per AICTE & DTE norms",
        "Online application form & document upload",
        "Track application status & merit list"
      ],
      btnText: "APPLY ONLINE",
      link: "https://dypcet.dypgroup.edu.in/admissions",
    },
    {
      icon: <DescriptionIcon fontSize="large" />,
      title: "Prospectus & Downloads",
      subtitle: "Fee structure, academic calendar, admission brochure (PDF).",
      details: [
        "Fee Structure for AY 2024–2025",
        "Academic calendar for UG / PG",
        "Scholarship & SC/ST concession forms"
      ],
      btnText: "DOWNLOAD PDF",
      link: "/downloads",
    },
    {
      icon: <NotificationsActiveIcon fontSize="large" />,
      title: "Notice Board",
      subtitle: "Latest circulars, time-table, results & examination notices.",
      details: [
        "Internal exam timetable",
        "Holiday announcement circular",
        "Revaluation form notice"
      ],
      btnText: "VIEW NOTICES",
      link: "/notices",
    },
    {
      icon: <WorkIcon fontSize="large" />,
      title: "Training & Placement",
      subtitle: "Placement reports, recruiters list, campus drives & internship portal.",
      details: [
        "Highest package – 24 LPA, Average – 6.5 LPA",
        "Top recruiters: Infosys, TCS, Capgemini, Wipro",
        "Internship opportunities from 3rd year"
      ],
      btnText: "VISIT T&P",
      link: "/placements",
    },
    {
      icon: <ApartmentIcon fontSize="large" />,
      title: "Departments",
      subtitle: "Academic structure, labs, faculty list, syllabus & research activities.",
      details: [
        "Computer Engineering",
        "AI & Data Science",
        "Mechanical / Civil / E&TC"
      ],
      btnText: "EXPLORE",
      link: "/departments",
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: "Contact / Enquiry",
      subtitle: "Admission enquiry helpline & admin office details.",
      details: [
        "☎ Admission Office: +91 86xxxxxxx",
        "📧 admissions@yourcollege.ac.in",
        "⏰ Working Hours: 9:30 AM – 5:00 PM"
      ],
      btnText: "CONTACT US",
      link: "/contact",
    },
    {
      icon: <FlagIcon fontSize="large" />,
      title: "Campus Virtual Tour",
      subtitle: "Explore classrooms, labs, library & hostel facilities.",
      details: [
        "360° view of campus",
        "Modern labs & incubation center",
        "Sports complex & auditorium"
      ],
      btnText: "TAKE TOUR",
      link: "/virtual-tour",
    },
    {
      icon: <GroupsIcon fontSize="large" />,
      title: "Alumni / Careers",
      subtitle: "Alumni cell, placement support & career development workshops.",
      details: [
        "17000+ alumni worldwide",
        "LinkedIn network support",
        "Career mentoring by industry experts"
      ],
      btnText: "LEARN MORE",
      link: "/alumni",
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {quickLinksData.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                background: "#ffffff",
                borderLeft: "8px solid #0B3C89",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ color: "#0B3C89" }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  {item.title}
                </Typography>
              </Stack>

              <Typography color="text.secondary">{item.subtitle}</Typography>

              {/* Details section */}
              <ul style={{ margin: "0 0 8px 18px", padding: 0 }}>
                {item.details.map((d, i) => (
                  <li key={i} style={{ fontSize: "14px", color: "#555" }}>
                    {d}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Button
                variant="contained"
                size="large"
                href={item.link}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#0B3C89",
                  "&:hover": { backgroundColor: "#072B63" },
                }}
              >
                {item.btnText}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickLinksSmart;
