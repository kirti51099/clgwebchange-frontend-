// // src/Pages/AcademicsPage.jsx
// import React from "react";
// import {
//   Container, Grid, Box, Paper, Typography, Button, Card, CardContent,
//   Avatar, Stack, Chip, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import SchoolIcon from "@mui/icons-material/School";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import GroupIcon from "@mui/icons-material/Group";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// // add near top of file (below other imports)
// import naacLogo from "../assets/academics/Naac.jpg";
// import aicteLogo from "../assets/academics/Aicte.jpg";


// /**
//  * Robust Academics page (uses fallback images so it never shows empty)
//  * Paste into src/Pages/AcademicsPage.jsx
//  */

// const FALLBACK_HERO = "https://via.placeholder.com/1600x600?text=DYPCET+Kolhapur+Academics";
// const FALLBACK_LAB = "https://via.placeholder.com/400x250?text=Lab";
// const FALLBACK_LIB = "https://via.placeholder.com/400x250?text=Library";
// const FALLBACK_FAC = "https://via.placeholder.com/80?text=Dr";

// const departments = [
//   { id: "cse", title: "Computer Science & Engineering", short: "AI, ML, Full-stack, Data Science, Cloud", seats: "120" },
//   { id: "mech", title: "Mechanical Engineering", short: "Thermodynamics, CAD, Manufacturing, Robotics", seats: "120" },
//   { id: "civil", title: "Civil Engineering", short: "Structural, Water Resources, Environmental", seats: "60" },
//   { id: "entc", title: "Electronics & Telecommunication", short: "VLSI, Embedded Systems, Communications", seats: "60" },
// ];

// const sampleFaculty = [
//   { name: "Dr. Navneet D. Sangle", role: "Associate Professor", dept: "Mathematics", email: "navneet.sangle@dypgroup.edu.in" },
//   { name: "Mrs. Shatakshi S. Kokate", role: "Assistant Professor", dept: "CSE", email: "sskokate@dypgroup.edu.in" },
// ];

// export default function AcademicsPage() {
//   // Try to use local assets if they exist; otherwise fall back to hosted placeholders.
//   // Keep these constants so you won't get broken images when asset files are not present.
//   const HERO_IMG = "/assets/academics/heroCampus.jpg";
//   const LAB_IMG = "/assets/academics/lab.jpg";
//   const LIB_IMG = "/assets/academics/library.jpg";
//   const FAC_IMG = "/assets/academics/faculty1.jpg";

//   // Helper to choose whether local asset exists (best-effort): we can't check filesystem here,
//   // so use the local path — if browser 404s the image will still show but UI remains functional.
//   // To be 100% safe, we display placeholders in the image elements as `onError` fallback.
//   const imgStyle = { width: "100%", borderRadius: 8, objectFit: "cover" };

//   return (
//     <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
//       {/* HERO */}
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           gap: 3,
//           alignItems: "center",
//           p: { xs: 3, md: 5 },
//           borderRadius: 3,
//           backgroundColor: "#0b3c89",
//           color: "white",
//           mb: 3
//         }}
//       >
   

//         <Box sx={{ flex: 1 }}>
//           <Typography
//   variant="h3"
//   sx={{
//     fontWeight: 900,
//     mb: 2,
//     position: "relative",
//     display: "inline-block",
//     color: "white",
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       width: "60%",
//       height: "4px",
//       bottom: 0,
//       left: "20%",
//       backgroundColor: "#FFD700",
//       borderRadius: "2px",
//       animation: "underlineGrow 1.2s ease-in-out forwards",
//     },
//     "@keyframes underlineGrow": {
//       from: { width: "0%" },
//       to: { width: "60%" },
//     },
//   }}
// >
//   Academics
// </Typography>

//           <Typography variant="h6" sx={{ opacity: 0.95, mb: 2 }}>
//             D.Y. Patil College of Engineering & Technology — Kasaba Bawada, Kolhapur
//           </Typography>
//           <Typography sx={{ maxWidth: 700, mb: 3 }}>
//             Strong programs, experienced faculty, cutting-edge labs and industry-focused curriculum. Explore departments, syllabus, calendar and academic resources.
//           </Typography>
//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//             <Button variant="contained" color="primary" href="/admissions">Apply / Admissions</Button>
//             <Button variant="outlined" color="inherit" href="/downloads">Prospectus & Downloads</Button>
//           </Stack>
//         </Box>

//         <Box sx={{ width: { xs: 0, md: 380 }, display: { xs: "none", md: "block" } }}>
//           <img
//             src={HERO_IMG}
//             alt="hero"
//             style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 8 }}
//             onError={(e) => (e.currentTarget.src = FALLBACK_HERO)}
//           />
//         </Box>
//       </Paper>
//        {/* Accreditation (NAAC + AICTE) */}
// <Box
//   sx={{
//     mt: 5,
//     textAlign: "center",
//     background: "linear-gradient(135deg, #0b2f59, #133b80)",
//     color: "white",
//     p: 4,
//     borderRadius: 3,
//     boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
//   }}
// >
//   <Typography
//     variant="h5"
//     sx={{
//       fontWeight: 900,
//       mb: 3,
//       textTransform: "uppercase",
//       letterSpacing: 1,
//     }}
//   >
//     Recognitions & Accreditations
//   </Typography>

//   <Stack
//     direction="row"
//     justifyContent="center"
//     spacing={6}
//     flexWrap="wrap"
//   >
//     <Box sx={{ textAlign: "center" }}>
//       <img
//         src={naacLogo}
//         alt="NAAC Logo"
//         width={120}
//         style={{
//           filter: "drop-shadow(0 2px 6px rgba(255,255,255,0.25))",
//           transition: "transform 0.25s ease, opacity 0.25s",
//         }}
//         onError={(e) =>
//           (e.currentTarget.src = "https://via.placeholder.com/120?text=NAAC")
//         }
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       />
//       <Typography variant="subtitle1" sx={{ mt: 1 }}>
//         NAAC Accredited (A+)
//       </Typography>
//     </Box>

//     <Box sx={{ textAlign: "center" }}>
//       <img
//         src={aicteLogo}
//         alt="AICTE Logo"
//         width={120}
//         style={{
//           filter: "drop-shadow(0 2px 6px rgba(255,255,255,0.25))",
//           transition: "transform 0.25s ease, opacity 0.25s",
//         }}
//         onError={(e) =>
//           (e.currentTarget.src = "https://via.placeholder.com/120?text=AICTE")
//         }
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       />
//       <Typography variant="subtitle1" sx={{ mt: 1 }}>
//         Approved by AICTE
//       </Typography>
//     </Box>
//   </Stack>
// </Box>



//       {/* STATS */}
//       <Grid container spacing={3} sx={{ mb: 3 }}>
//         <Grid item xs={12} md={3}>
//           <Card sx={{ p: 2, textAlign: "center" }}>
//             <SchoolIcon sx={{ fontSize: 36, color: "primary.main" }} />
//             <Typography variant="h5" sx={{ fontWeight: 800 }}>40+</Typography>
//             <Typography variant="body2" color="text.secondary">Years of Excellence</Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <Card sx={{ p: 2, textAlign: "center" }}>
//             <GroupIcon sx={{ fontSize: 36, color: "primary.main" }} />
//             <Typography variant="h5" sx={{ fontWeight: 800 }}>6000+</Typography>
//             <Typography variant="body2" color="text.secondary">Students (est.)</Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <Card sx={{ p: 2, textAlign: "center" }}>
//             <EmojiEventsIcon sx={{ fontSize: 36, color: "primary.main" }} />
//             <Typography variant="h5" sx={{ fontWeight: 800 }}>Top Recruiters</Typography>
//             <Typography variant="body2" color="text.secondary">TCS, Infosys, Wipro, Capgemini, L&T</Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <Card sx={{ p: 2, textAlign: "center" }}>
//             <CalendarTodayIcon sx={{ fontSize: 36, color: "primary.main" }} />
//             <Typography variant="h5" sx={{ fontWeight: 800 }}>Academic Calendar</Typography>
//             <Typography variant="body2" color="text.secondary">
//               <Button size="small" href="/downloads">Open</Button>
//             </Typography>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Departments + Sidebar */}
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={7}>
//           <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Departments & Programs</Typography>

//           <Grid container spacing={2}>
//             {departments.map((d) => (
//               <Grid key={d.id} item xs={12} sm={6}>
//                 <Card
//                sx={{
//                p: 3,
//     backgroundColor: "#102A68",
//     color: "white",
//     borderRadius: 3,
//     textAlign: "center",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
//     transition: "transform 0.3s, box-shadow 0.3s",
//     "&:hover": {
//       transform: "translateY(-10px)",
//       boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
//     },
//   }}
// >
//   <Avatar sx={{ bgcolor: "#FFD700", mx: "auto", mb: 1 }}>
//     <SchoolIcon sx={{ color: "#0A1F44" }} />
//   </Avatar>
//   <Typography variant="h6" sx={{ fontWeight: 800 }}>
//     {d.title}
//   </Typography>
//   <Typography variant="body2" sx={{ opacity: 0.9 }}>
//     {d.short}
//   </Typography>
// </Card>

//                   <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56, mr: 2 }}>
//                     <ApartmentIcon />
//                   </Avatar>
//                   <Box sx={{ flex: 1 }}>
//                     <Typography sx={{ fontWeight: 800 }}>{d.title}</Typography>
//                     <Typography variant="body2" color="text.secondary">{d.short}</Typography>
//                     <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
//                       <Chip label={`${d.seats} seats`} size="small" />
//                       <Button size="small" variant="text" href={`/departments/${d.id}`}>View</Button>
//                     </Stack>
//                   </Box>
                
//               </Grid>
//             ))}
//           </Grid>

//           <Box sx={{ mt: 3 }}>
//             <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Syllabus & Curriculum</Typography>
//             <Typography color="text.secondary" sx={{ mb: 1 }}>
//               Department-wise syllabus, semester-wise subject lists and labs. (Static page)
//             </Typography>

//             <Accordion>
//               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                 <Typography sx={{ fontWeight: 700 }}>Undergraduate (B.Tech) — Semester-wise</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <List dense>
//                   <ListItem><ListItemText primary="First Year — Engineering fundamentals & labs" /></ListItem>
//                   <ListItem><ListItemText primary="Core subjects by department" /></ListItem>
//                   <ListItem><ListItemText primary="Electives, internships & final year project" /></ListItem>
//                 </List>
//                 <Button variant="contained" size="small" href="/downloads">Download Syllabus PDFs</Button>
//               </AccordionDetails>
//             </Accordion>
//           </Box>
//         </Grid>

//         <Grid item xs={12} md={5}>
//           <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Faculty & Facilities</Typography>

//           <Paper sx={{ p: 2, mb: 3 }}>
//             <Stack direction="row" spacing={2} alignItems="center">
//               <Avatar
//                 src={FAC_IMG}
//                 alt="faculty"
//                 sx={{ width: 72, height: 72 }}
//                 onError={(e) => (e.currentTarget.src = FALLBACK_FAC)}
//               />
//               <Box>
//                 <Typography sx={{ fontWeight: 800 }}>Dr. Navneet D. Sangle</Typography>
//                 <Typography variant="body2" color="text.secondary">Associate Professor (Mathematics)</Typography>
//                 <Typography variant="caption" color="text.secondary">Email: navneet.sangle@dypgroup.edu.in</Typography>
//               </Box>
//             </Stack>

//             <Box sx={{ mt: 2 }}>
//               {sampleFaculty.map((f, i) => (
//                 <Box key={i} sx={{ mb: 1 }}>
//                   <Typography sx={{ fontWeight: 700 }}>{f.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">{f.role} — {f.dept}</Typography>
//                 </Box>
//               ))}
//             </Box>

//             <Box sx={{ mt: 2 }}>
//               <Button href="/faculty" size="small" variant="outlined">Full Faculty List</Button>
//             </Box>
//           </Paper>

//           <Paper sx={{ p: 2, mb: 3 }}>
//             <Typography sx={{ fontWeight: 800, mb: 1 }}>Labs & Library</Typography>
//             <Grid container spacing={1}>
//               <Grid item xs={6}>
//                 <img src={LAB_IMG} alt="lab" style={imgStyle} onError={(e)=> (e.currentTarget.src = FALLBACK_LAB)} />
//               </Grid>
//               <Grid item xs={6}>
//                 <img src={LIB_IMG} alt="library" style={imgStyle} onError={(e)=> (e.currentTarget.src = FALLBACK_LIB)} />
//               </Grid>
//             </Grid>
//           </Paper>

//           <Paper sx={{ p:2 }}>
//             <Typography sx={{ fontWeight: 800 }}>Academic Resources</Typography>
//             <List dense>
//               <ListItem>
//                 <ListItemText primary="Academic Calendar" secondary="Semester dates & exam schedule" />
//                 <Button size="small" variant="contained" href="/downloads">Open</Button>
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Syllabus PDFs" secondary="Department-wise" />
//                 <Button size="small" variant="contained" href="/downloads">Open</Button>
//               </ListItem>
//             </List>
//           </Paper>
//         </Grid>
//       </Grid>
//       {/* Downloads Section */}
// <Box sx={{ mt: 5 }}>
//   <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
//     Academic Downloads
//   </Typography>
//   <Grid container spacing={2}>
//     <Grid item xs={12} sm={6} md={4}>
//       <Paper sx={{ p: 2, textAlign: "center" }}>
//         <MenuBookIcon sx={{ fontSize: 36, color: "primary.main" }} />
//         <Typography variant="h6">Syllabus (CSE)</Typography>
//         <Button
//           href="/downloads/CSE_Syllabus.pdf"
//           variant="contained"
//           sx={{ mt: 1 }}
//         >
//           Download
//         </Button>
//       </Paper>
//     </Grid>
//     <Grid item xs={12} sm={6} md={4}>
//       <Paper sx={{ p: 2, textAlign: "center" }}>
//         <MenuBookIcon sx={{ fontSize: 36, color: "primary.main" }} />
//         <Typography variant="h6">Academic Calendar</Typography>
//         <Button
//           href="/downloads/Academic_Calendar.pdf"
//           variant="contained"
//           sx={{ mt: 1 }}
//         >
//           Download
//         </Button>
//       </Paper>
//     </Grid>
//   </Grid>
// </Box>

// {/* Events Timeline */}
// <Box sx={{ mt: 5 }}>
//   <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
//     Recent Academic Events
//   </Typography>
//   <List>
//     <ListItem>
//       <ListItemText
//         primary="AI & Machine Learning Workshop"
//         secondary="Organized by CSE Dept. | July 2025"
//       />
//     </ListItem>
//     <ListItem>
//       <ListItemText
//         primary="Robotics Exhibition 2025"
//         secondary="Mechanical & E&TC Departments | March 2025"
//       />
//     </ListItem>
//     <ListItem>
//       <ListItemText
//         primary="Civil Engineering Site Visit"
//         secondary="Panhala Dam | February 2025"
//       />
//     </ListItem>
//   </List>
// </Box>

//       {/* Achievements */}
// <Box sx={{ mt: 5 }}>
//   <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
//     Academic Achievements
//   </Typography>
//   <Grid container spacing={3}>
//     <Grid item xs={12} md={4}>
//       <Card sx={{ p: 2, textAlign: "center" }}>
//         <EmojiEventsIcon sx={{ fontSize: 40, color: "gold" }} />
//         <Typography variant="h6" sx={{ fontWeight: 700 }}>
//           NAAC Accredited (A+)
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Recognized for academic excellence and research innovation.
//         </Typography>
//       </Card>
//     </Grid>
//     <Grid item xs={12} md={4}>
//       <Card sx={{ p: 2, textAlign: "center" }}>
//         <SchoolIcon sx={{ fontSize: 40, color: "primary.main" }} />
//         <Typography variant="h6" sx={{ fontWeight: 700 }}>
//           University Rankers
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Our students consistently top the Shivaji University merit list.
//         </Typography>
//       </Card>
//     </Grid>
//     <Grid item xs={12} md={4}>
//       <Card sx={{ p: 2, textAlign: "center" }}>
//         <GroupIcon sx={{ fontSize: 40, color: "secondary.main" }} />
//         <Typography variant="h6" sx={{ fontWeight: 700 }}>
//           Research Publications
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           200+ papers published in national & international journals.
//         </Typography>
//       </Card>
//     </Grid>
//   </Grid>
// </Box>



//       {/* FAQ */}
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>FAQ — Academics</Typography>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography>How to download syllabus?</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>Click "Syllabus PDFs" above to download department-wise PDFs from the downloads page.</Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     </Container>
//   );
// }
// src/Pages/AcademicsPage.jsx
// src/Pages/AcademicsPage.jsx
// src/Pages/AcademicsPage.jsx

// src/Pages/AcademicsPage.jsx
import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Avatar,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import naacLogo from "../assets/academics/Naac.jpg";
import aicteLogo from "../assets/academics/Aicte.jpg";


export default function AcademicsPage() {
  const departments = [
    { id: "cse", title: "Computer Science & Engineering", short: "AI, ML, Full-Stack, Data Science", seats: "120" },
    { id: "mech", title: "Mechanical Engineering", short: "Design, Robotics & Manufacturing", seats: "120" },
    { id: "civil", title: "Civil Engineering", short: "Structural & Environmental Engineering", seats: "60" },
    { id: "entc", title: "Electronics & Telecommunication", short: "VLSI, Embedded & Communication", seats: "60" },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
      {/* HERO SECTION */}
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          textAlign: "center",
          background: "linear-gradient(135deg,#082554,#0f3e7a)",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 1,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -6,
              left: "25%",
              width: "50%",
              height: 3,
              background: "#FFD700",
              borderRadius: 2,
            },
          }}
        >
          Academics
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
          D.Y. Patil College of Engineering & Technology — Kasaba Bawada, Kolhapur
        </Typography>
        <Typography sx={{ mt: 2, maxWidth: 700, mx: "auto", opacity: 0.9 }}>
          Explore our academic excellence, recognized by NAAC (A+) and approved by AICTE. Learn more about our top
          engineering programs, syllabus, and achievements.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FFD700", color: "#082554", fontWeight: 700 }}
            href="/admissions"
          >
            Apply / Admissions
          </Button>
          <Button variant="outlined" sx={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }} href="/downloads">
            Prospectus & Downloads
          </Button>
        </Stack>
      </Paper>

      {/* ACCREDITATION SECTION */}
      <Box sx={{ mt: 4, p: 3, borderRadius: 3, background: "linear-gradient(135deg,#0b2f59,#133b80)", color: "white", textAlign: "center" }}>
  <Typography variant="h6" sx={{ fontWeight: 900, mb: 2, color: "#FFD700" }}>Recognitions & Accreditations</Typography>
  <Stack direction="row" justifyContent="center" spacing={6} flexWrap="wrap">
    <Box sx={{ textAlign: "center" }}>
      <img src={naacLogo} alt="NAAC" width={120} onError={e => e.currentTarget.src = "https://via.placeholder.com/120?text=NAAC"} />
      <Typography variant="subtitle2" sx={{ mt: 1 }}>NAAC Accredited (A+)</Typography>
    </Box>
    <Box sx={{ textAlign: "center" }}>
      <img src={aicteLogo} alt="AICTE" width={120} onError={e => e.currentTarget.src = "https://via.placeholder.com/120?text=AICTE"} />
      <Typography variant="subtitle2" sx={{ mt: 1 }}>Approved by AICTE</Typography>
    </Box>
  </Stack>
</Box>

      {/* STATISTICS SECTION */}
      <Grid container spacing={3} sx={{ mt: 5 }}>
        {[
          { icon: <SchoolIcon />, title: "40+", subtitle: "Years of Excellence" },
          { icon: <GroupIcon />, title: "6000+", subtitle: "Students (est.)" },
          {
            icon: <EmojiEventsIcon />,
            title: "Top Recruiters",
            subtitle: "TCS, Infosys, Wipro, Capgemini, L&T",
          },
          { icon: <CalendarTodayIcon />, title: "Academic Calendar", subtitle: "Semester Schedule" },
        ].map((stat, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": { transform: "translateY(-6px)", boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
              }}
            >
              <Avatar sx={{ bgcolor: "#FFD700", color: "#082554", width: 56, height: 56, mx: "auto", mb: 1 }}>
                {stat.icon}
              </Avatar>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                {stat.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.subtitle}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* DEPARTMENTS SECTION */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, textAlign: "center", color: "#082554" }}>
          Departments & Programs
        </Typography>

        <Grid container spacing={2}>
          {departments.map((d) => (
            <Grid item xs={12} sm={6} md={3} key={d.id}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  background: "linear-gradient(180deg,#0b2f59,#133b80)",
                  color: "white",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": { transform: "translateY(-8px)", boxShadow: "0 10px 20px rgba(0,0,0,0.3)" },
                }}
              >
                <Avatar sx={{ bgcolor: "#FFD700", mx: "auto", mb: 1 }}>
                  <ApartmentIcon sx={{ color: "#0A1F44" }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {d.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
                  {d.short}
                </Typography>
                <Chip label={`${d.seats} Seats`} size="small" sx={{ bgcolor: "#FFD700", color: "#082554" }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* DOWNLOADS SECTION */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, color: "#082554" }}>
          Academic Downloads
        </Typography>
        <Grid container spacing={2}>
          {[
            { title: "Syllabus (CSE)", file: "/downloads/CSE_Syllabus.pdf" },
            { title: "Academic Calendar", file: "/downloads/Academic_Calendar.pdf" },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Paper sx={{ p: 3, textAlign: "center" }}>
                <MenuBookIcon sx={{ fontSize: 36, color: "#0b2f59" }} />
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {item.title}
                </Typography>
                <Button
                  href={item.file}
                  variant="contained"
                  sx={{ mt: 1, background: "#FFD700", color: "#082554", fontWeight: 700 }}
                >
                  Download
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ACHIEVEMENTS SECTION */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, color: "#082554" }}>
          Academic Achievements
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <EmojiEventsIcon sx={{ fontSize: 40, color: "gold" }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
                NAAC Accredited (A+)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Recognized for academic excellence and research innovation.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <SchoolIcon sx={{ fontSize: 40, color: "#0b2f59" }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
                University Rankers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our students consistently top university merit lists.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <GroupIcon sx={{ fontSize: 40, color: "#133b80" }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
                Research Publications
              </Typography>
              <Typography variant="body2" color="text.secondary">
                200+ papers published in reputed journals.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* FAQ SECTION */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" sx={{ fontWeight: 900, mb: 2, color: "#082554" }}>
          FAQ — Academics
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How to download syllabus?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Click the “Academic Downloads” section above to download PDFs for each department.</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
