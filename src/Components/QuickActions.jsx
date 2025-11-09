// // src/components/QuickActions.jsx
// import React from "react";
// import { Paper, Stack, Button, Typography } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";
// import DescriptionIcon from "@mui/icons-material/Description";
// import EventNoteIcon from "@mui/icons-material/EventNote";
// import WorkIcon from "@mui/icons-material/Work";

// export default function QuickActions() {
//   return (
//     <Paper sx={{ p: 2, borderRadius: 3 }}>
//       <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Quick Links</Typography>
//       <Stack spacing={1}>
//         <Button variant="contained" startIcon={<SchoolIcon />} href="/admission">Admissions</Button>
//         <Button variant="outlined" startIcon={<DescriptionIcon />} href="/fee-structure">Fee Structure</Button>
//         <Button variant="outlined" startIcon={<EventNoteIcon />} href="/notice">Notice Board</Button>
//         <Button variant="outlined" startIcon={<WorkIcon />} href="/placement">Placement Cell</Button>
//       </Stack>
//     </Paper>
//   );
// }
