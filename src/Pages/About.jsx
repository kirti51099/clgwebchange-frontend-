// src/Pages/AboutPage.jsx
import React from "react";
import {
  Container,
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Avatar,
  Stack,
  Card,
  CardContent,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const NAVY = "#07264a";
const GOLD = "#FFD700";

/**
 * AboutPage.jsx — updated for DYPCET Kasaba Bawada, Kolhapur
 * - Principal: Dr. Santosh D. Chede
 * - Sample faculty: Prof. N. D. Sangle + others
 *
 * Save to: src/Pages/AboutPage.jsx and add route in App.jsx:
 * <Route path="/about" element={<AboutPage />} />
 */

// optional image paths (place files in public/assets/academics/)
const NAAC_SRC = "/assets/academics/naac.png";
const AICTE_SRC = "/assets/academics/aicte.png";

const stats = [
  { icon: <SchoolIcon />, value: "40+", label: "Years of Excellence" },
  { icon: <PeopleIcon />, value: "6000+", label: "Students & Alumni" },
  { icon: <BusinessCenterIcon />, value: "100+", label: "Industry Partners" },
  { icon: <EmojiEventsIcon />, value: "A+", label: "NAAC (sample)" },
];

// Realistic leadership + sample faculty (editable)
const leadership = {
  name: "Dr. Santosh D. Chede",
  title: "Principal",
  bio:
    "Dr. Santosh D. Chede has a strong background in academic leadership and research. He focuses on academic quality, research collaboration and industry linkages.",
  email: "principal@dypcet.edu.in",
};

const facultySample = [
  { name: "Prof. N. D. Sangle", dept: "Applied Mathematics", email: "ndsangle@dypcet.edu.in" },
  { name: "Dr. Shatakshi S. Kokate", dept: "Computer Science", email: "sskokate@dypcet.edu.in" },
  { name: "Dr. R. V. Patil", dept: "Mechanical Engineering", email: "rvpatil@dypcet.edu.in" },
];

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
      {/* HERO */}
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          background: `linear-gradient(90deg, ${NAVY}, #133b80)`,
          color: "white",
          mb: 4,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
              About D.Y. Patil College of Engineering & Technology
            </Typography>
            <Typography sx={{ maxWidth: 720, opacity: 0.95, mb: 3 }}>
              DYPCET, Kasaba Bawada, Kolhapur delivers industry-focused engineering education with strong labs,
              research activities and placement support. We combine rigorous academics with hands-on training to
              prepare students for professional careers.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button href="/admissions" variant="contained" sx={{ bgcolor: GOLD, color: NAVY, fontWeight: 800 }}>
                Apply Now
              </Button>
              <Button href="/contact" variant="outlined" sx={{ color: "white", borderColor: "rgba(255,255,255,0.18)" }}>
                Contact
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-end" } }}>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={NAAC_SRC}
                  alt="NAAC"
                  width={110}
                  onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/110?text=NAAC")}
                  style={{ filter: "drop-shadow(0 6px 15px rgba(0,0,0,0.25))" }}
                />
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  NAAC Accredited
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <img
                  src={AICTE_SRC}
                  alt="AICTE"
                  width={110}
                  onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/110?text=AICTE")}
                  style={{ filter: "drop-shadow(0 6px 15px rgba(0,0,0,0.25))" }}
                />
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Approved by AICTE
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Mission / Vision / Values */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 800, color: NAVY }}>
                Mission
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" color="text.secondary">
                Provide high-quality technical education, foster research and innovation, and create industry-ready graduates with ethical and leadership skills.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 800, color: NAVY }}>
                Vision
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" color="text.secondary">
                To be a leading centre of excellence in engineering education, known for research, innovation and social impact.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 800, color: NAVY }}>
                Core Values
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Stack spacing={1}>
                <Chip label="Integrity" />
                <Chip label="Innovation" />
                <Chip label="Inclusion" />
                <Chip label="Industry-aligned" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* History & Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: NAVY, mb: 1 }}>
              Brief History
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Established to provide technical education with an emphasis on industry-relevant skills, DYPCET has grown
              over decades to offer multiple engineering programs, active research and strong placement support.
            </Typography>

            <List dense>
              <ListItem>
                <ListItemText primary="1990" secondary="Institute established" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2005" secondary="Campus expansion and new labs" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2018" secondary="Strengthened industry collaborations & accreditations" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: NAVY, mb: 2 }}>
              At a glance
            </Typography>

            <Grid container spacing={2}>
              {stats.map((s, i) => (
                <Grid item xs={6} key={i}>
                  <Paper sx={{ p: 2, textAlign: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>{s.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      {s.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {s.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Leadership */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={4} sx={{ textAlign: "center", p: 2 }}>
            <Avatar sx={{ width: 110, height: 110, mx: "auto", mb: 2, bgcolor: GOLD, color: NAVY }}>SC</Avatar>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              {leadership.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {leadership.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {leadership.bio}
            </Typography>
            <Button href={`mailto:${leadership.email}`} variant="contained" sx={{ bgcolor: NAVY, color: "white" }}>
              Contact
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: NAVY }}>
              Selected Faculty
            </Typography>

            <List>
              {facultySample.map((f, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={f.name} secondary={`${f.dept} • ${f.email}`} />
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: 2 }}>
              <Button href="/faculty" variant="outlined">View Full Faculty</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* CTA / Contact */}
      <Paper sx={{ p: 3, borderRadius: 2, background: "#f6fbff" }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              Want to visit campus or ask about admissions?
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Contact Admissions or schedule a campus tour. Our team will help you with admissions, scholarships and program fit.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
            <Button href="/contact" variant="contained" sx={{ bgcolor: NAVY, color: "white", fontWeight: 800 }}>
              Contact Admissions
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
