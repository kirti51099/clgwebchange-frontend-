// src/components/Navbar.jsx
import React from "react";
//import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" color="primary" elevation={6}>
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={logo} alt="logo" style={{ width: 56, height: 56, borderRadius: 8, objectFit: "cover" }} />
          <Box>
            <Typography variant="h6" sx={{ lineHeight: 1 }}>
              D.Y.Patil College of Engineering & Technology
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9, display: { xs: "none", md: "block" } }}>
              Approved by AICTE | Affiliated to XYZ University
            </Typography>
          </Box>
        </Box>

        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
  <Button component={RouterLink} to="/" color="inherit">Home</Button>
  <Button component={RouterLink} to="/about" color="inherit">About</Button>
  <Button component={RouterLink} to="/academics" color="inherit">Academics</Button>
  <Button component={RouterLink} to="/departments" color="inherit">Departments</Button>
  <Button component={RouterLink} to="/virtual-tour" color="inherit">Virtual Tour</Button>
  <Button component={RouterLink} to="/contact" color="inherit" sx={{ ml: 2 }}>Contact</Button>

  
<Button
  component={RouterLink}
  to="/admin"                 // ← always login first
  variant="contained"
  sx={{ ml: 2, bgcolor: "#FFD700", color: "#0b3c89", fontWeight: 700,
        "&:hover": { bgcolor: "#ffcc00" } }}
>
  Admin
</Button>

  {/* ✅ New Admin Link */}
  {/* <Button 
    component={RouterLink} 
    to="/admin/messages" 
    color="secondary" 
    variant="contained"
    sx={{ ml: 2 }}
  >
    Admin
  </Button> */}
</Box>

        ) : (
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
// src/components/Navbar.jsx
// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Button,
//   IconButton,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link as RouterLink } from "react-router-dom";
// import logo from "../assets/logo.jpg";

// export default function Navbar() {
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
//   const isLoggedIn = !!localStorage.getItem("token"); // ✅ Check login state

//   return (
//     <AppBar position="sticky" color="primary" elevation={6}>
//       <Toolbar
//         sx={{
//           justifyContent: "space-between",
//           gap: 2,
//           flexWrap: "wrap",
//           py: { xs: 1, sm: 1.5 },
//         }}
//       >
//         {/* ---- Left Section (Logo + Title) ---- */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           <img
//             src={logo}
//             alt="logo"
//             style={{
//               width: 56,
//               height: 56,
//               borderRadius: 8,
//               objectFit: "cover",
//             }}
//           />
//           <Box>
//             <Typography variant="h6" sx={{ lineHeight: 1.2, fontWeight: 700 }}>
//               D.Y.Patil College of Engineering & Technology
//             </Typography>
//             <Typography
//               variant="caption"
//               sx={{
//                 opacity: 0.9,
//                 display: { xs: "none", md: "block" },
//                 fontSize: "0.8rem",
//               }}
//             >
//               Approved by AICTE | Affiliated to XYZ University
//             </Typography>
//           </Box>
//         </Box>

//         {/* ---- Right Section (Menu) ---- */}
//         {!isMobile ? (
//           <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
//             <Button component={RouterLink} to="/" color="inherit">
//               Home
//             </Button>
//             <Button component={RouterLink} to="/about" color="inherit">
//               About
//             </Button>
//             <Button component={RouterLink} to="/academics" color="inherit">
//               Academics
//             </Button>
//             <Button component={RouterLink} to="/departments" color="inherit">
//               Departments
//             </Button>
//             <Button component={RouterLink} to="/virtual-tour" color="inherit">
//               Virtual Tour
//             </Button>
//             <Button
//               component={RouterLink}
//               to="/contact"
//               color="inherit"
//               sx={{ ml: 1 }}
//             >
//               Contact
//             </Button>

//             {/* ✅ Smart Admin Button */}
//             <Button
//               component={RouterLink}
//               to={isLoggedIn ? "/admin/dashboard" : "/admin"} // auto route
//               variant="contained"
//               sx={{
//                 ml: 2,
//                 bgcolor: "#FFD700",
//                 color: "#0b3c89",
//                 fontWeight: 700,
//                 "&:hover": { bgcolor: "#ffcc00" },
//               }}
//             >
//               {isLoggedIn ? "Admin Dashboard" : "Admin Login"}
//             </Button>
//           </Box>
//         ) : (
//           <IconButton color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

