// src/Pages/DepartmentsPage.jsx
import React, { useMemo, useState } from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Chip,
  Avatar,
  IconButton,
  Paper,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import CloseIcon from "@mui/icons-material/Close";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ComputerIcon from "@mui/icons-material/Computer";
import BuildIcon from "@mui/icons-material/Build";
import DomainIcon from "@mui/icons-material/Domain";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudIcon from "@mui/icons-material/Cloud";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScienceIcon from "@mui/icons-material/Science";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

/**
 * Attractive DepartmentsPage
 * - Paste into src/Pages/DepartmentsPage.jsx
 * - Add route: <Route path="/departments" element={<DepartmentsPage />} />
 *
 * Visual style: deep navy gradients, gold accents, pronounced shadows, equal-height cards.
 */

// theme colors
const NAVY = "#07264a";
const NAVY2 = "#133b80";
const GOLD = "#FFD700";

const DEPARTMENTS = [
  {
    id: "cse",
    title: "Computer Science & Engineering",
    head: "Dr. S. P. Kulkarni",
    seats: 120,
    short: "AI, ML, Data Science, Full-stack & Cloud.",
    syllabus: "/downloads/CSE_Syllabus.pdf",
    icon: "computer",
  },
  {
    id: "mech",
    title: "Mechanical Engineering",
    head: "Dr. R. V. Patil",
    seats: 120,
    short: "Design, Thermodynamics, Manufacturing & Robotics.",
    syllabus: "/downloads/MECH_Syllabus.pdf",
    icon: "build",
  },
  {
    id: "civil",
    title: "Civil Engineering",
    head: "Dr. M. B. Deshmukh",
    seats: 60,
    short: "Structural, Transportation & Environmental Engineering.",
    syllabus: "/downloads/CIVIL_Syllabus.pdf",
    icon: "domain",
  },
  {
    id: "entc",
    title: "Electronics & Telecommunication",
    head: "Dr. P. K. Jadhav",
    seats: 60,
    short: "VLSI, Embedded Systems & Communications.",
    syllabus: "/downloads/ENTC_Syllabus.pdf",
    icon: "memory",
  },
  {
    id: "it",
    title: "Information Technology",
    head: "Dr. A. R. Bhosale",
    seats: 60,
    short: "Cybersecurity, Software Engineering & Cloud.",
    syllabus: "/downloads/IT_Syllabus.pdf",
    icon: "cloud",
  },
  {
    id: "ai",
    title: "Artificial Intelligence & Data Science",
    head: "Dr. N. D. Sangle",
    seats: 60,
    short: "Machine Learning, Deep Learning & Data Mining.",
    syllabus: "/downloads/AI_DS_Syllabus.pdf",
    icon: "psychology",
  },
  {
    id: "chem",
    title: "Chemical Engineering",
    head: "Dr. S. T. Kulkarni",
    seats: 60,
    short: "Process Engg, Unit Ops & Reaction Engineering.",
    syllabus: "/downloads/CHEM_Syllabus.pdf",
    icon: "science",
  },
  {
    id: "arch",
    title: "Architecture & Planning",
    head: "Dr. R. S. More",
    seats: 60,
    short: "Design Studio, Urban Planning & Materials.",
    syllabus: "/downloads/ARCH_Syllabus.pdf",
    icon: "homework",
  },
];

function DeptIcon({ name }) {
  const sx = { color: NAVY2, fontSize: 26 };
  switch (name) {
    case "computer":
      return <ComputerIcon sx={sx} />;
    case "build":
      return <BuildIcon sx={sx} />;
    case "domain":
      return <DomainIcon sx={sx} />;
    case "memory":
      return <MemoryIcon sx={sx} />;
    case "cloud":
      return <CloudIcon sx={sx} />;
    case "psychology":
      return <PsychologyIcon sx={sx} />;
    case "science":
      return <ScienceIcon sx={sx} />;
    case "homework":
      return <HomeWorkIcon sx={sx} />;
    default:
      return <ApartmentIcon sx={sx} />;
  }
}

function DeptBanner({ id }) {
  // gradient palette per dept for visual variety
  const palette = {
    cse: ["#0b3c89", "#1952B8"],
    mech: ["#3a2f5b", "#6b4aa0"],
    civil: ["#0b5a2b", "#2b8a4a"],
    entc: ["#2b4a6f", "#4b79b3"],
    it: ["#003366", "#1e4f8b"],
    ai: ["#1f3b4d", "#2e6b8e"],
    chem: ["#4b2e2e", "#8a4b4b"],
    arch: ["#3a3a3a", "#6b6b6b"],
  };
  const c = palette[id] || [NAVY, NAVY2];
  return (
    <Box
      sx={{
        height: 96,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${c[0]}, ${c[1]})`,
        color: "white",
      }}
    />
  );
}

function DepartmentCard({ dept, onView }) {
  return (
    <Card
      elevation={8}
      sx={{
        height: "100%", // ensures equal height in grid
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        transition: "transform 0.28s ease, box-shadow 0.28s ease",
        "&:hover": {
          transform: "translateY(-10px) scale(1.01)",
          boxShadow: "0 20px 45px rgba(3,27,72,0.25)",
        },
      }}
    >
      <DeptBanner id={dept.id} />

      <CardContent sx={{ flexGrow: 1, py: 3, px: 3, background: "#f7fafc" }}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Avatar
            sx={{
              bgcolor: GOLD,
              color: NAVY,
              width: 56,
              height: 56,
              boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
            }}
          >
            <DeptIcon name={dept.icon} />
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: NAVY2, mb: 0.5 }}>
              {dept.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {dept.short}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 1, alignItems: "center" }}>
              <Chip label={`${dept.seats} seats`} size="small" sx={{ bgcolor: "#e6f0ff", color: NAVY2 }} />
              <Chip label="UG" size="small" sx={{ bgcolor: "#fff1cc", color: NAVY2 }} />
              <Typography variant="caption" sx={{ ml: "auto", color: "text.secondary" }}>
                Head: {dept.head.split(" ")[0]}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 3, py: 2, background: "#fff" }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => onView(dept)}
          sx={{
            background: `linear-gradient(90deg, ${NAVY}, ${NAVY2})`,
            color: "white",
            fontWeight: 800,
            boxShadow: "0 8px 18px rgba(11,47,89,0.28)",
          }}
        >
          View Courses
        </Button>

        <Button
          variant="outlined"
          size="small"
          href={dept.syllabus}
          target="_blank"
          sx={{
            borderColor: NAVY2,
            color: NAVY2,
            ml: 1,
            fontWeight: 700,
          }}
        >
          Syllabus
        </Button>

        <Tooltip title="Details page">
          <IconButton href={`/departments/${dept.id}`} sx={{ ml: "auto", color: NAVY2 }}>
            <ApartmentIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default function DepartmentsPage() {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState("ALL");
  const [sort, setSort] = useState("NAME_ASC");
  const [selectedDept, setSelectedDept] = useState(null);

  const filtered = useMemo(() => {
    let list = DEPARTMENTS.slice();
    if (level !== "ALL") list = list.filter((d) => (level === "UG" ? true : true)); // placeholder - keep all for now
    if (q.trim()) {
      const qq = q.trim().toLowerCase();
      list = list.filter((d) => (d.title + " " + d.short + " " + d.head).toLowerCase().includes(qq));
    }
    if (sort === "NAME_ASC") list.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "NAME_DESC") list.sort((a, b) => b.title.localeCompare(a.title));
    if (sort === "SEATS_DESC") list.sort((a, b) => b.seats - a.seats);
    return list;
  }, [q, level, sort]);

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
      {/* Header */}
      <Box sx={{ mb: 3, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 900, color: NAVY }}>
            Departments
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explore our programs — click any department to view semester-wise courses, syllabus and apply links.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <Button href="/downloads" variant="outlined" sx={{ borderColor: NAVY2, color: NAVY2 }}>
            Prospectus
          </Button>
          <Button href="/admissions" variant="contained" sx={{ background: GOLD, color: NAVY, fontWeight: 900 }}>
            Apply Now
          </Button>
        </Stack>
      </Box>

      {/* Controls */}
      <Paper sx={{ p: 2, mb: 4, borderRadius: 2, boxShadow: "0 6px 18px rgba(3,27,72,0.06)" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search departments, courses or head..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#7a8ea9" }} />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <FormControl fullWidth size="small">
              <Select value={level} onChange={(e) => setLevel(e.target.value)}>
                <MenuItem value="ALL">All Levels</MenuItem>
                <MenuItem value="UG">UG</MenuItem>
                <MenuItem value="PG">PG</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <FormControl fullWidth size="small">
              <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                <MenuItem value="NAME_ASC">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <SortByAlphaIcon fontSize="small" /> <span>Name A → Z</span>
                  </Stack>
                </MenuItem>
                <MenuItem value="NAME_DESC">Name Z → A</MenuItem>
                <MenuItem value="SEATS_DESC">Seats High → Low</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* Grid */}
      <Grid container spacing={3}>
        {filtered.map((dept) => (
          <Grid item xs={12} sm={6} md={3} key={dept.id}>
            <DepartmentCard dept={dept} onView={setSelectedDept} />
          </Grid>
        ))}

        {filtered.length === 0 && (
          <Grid item xs={12}>
            <Paper sx={{ p: 6, textAlign: "center" }}>
              <Typography variant="h6">No departments found</Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Try clearing filters or search terms.
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>

      {/* Details Dialog */}
      <Dialog open={!!selectedDept} onClose={() => setSelectedDept(null)} fullWidth maxWidth="md">
        {selectedDept && (
          <>
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                  {selectedDept.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Head: {selectedDept.head} • Seats: {selectedDept.seats}
                </Typography>
              </Box>
              <IconButton onClick={() => setSelectedDept(null)} size="large">
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <Typography sx={{ fontWeight: 800, mb: 1 }}>Sample Core Courses</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="Data Structures & Algorithms" secondary="Core programming and algorithms" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Operating Systems" secondary="Processes, threads, scheduling, concurrency" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Database Systems" secondary="Relational design, SQL, transactions" />
                    </ListItem>
                  </List>

                  <Box sx={{ mt: 2 }}>
                    <Typography sx={{ fontWeight: 800 }}>Overview</Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                      {selectedDept.short} Department emphasizes hands-on labs, projects and strong industry tie-ups for internships and placements.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Paper sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800 }}>Resources</Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Syllabus (pdf)" secondary={<Button size="small" href={selectedDept.syllabus}>Open</Button>} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Apply / Admissions" secondary={<Button size="small" href="/admissions">Apply</Button>} />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Button onClick={() => setSelectedDept(null)} variant="text">Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}
