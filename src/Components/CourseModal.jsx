// src/components/CourseModal.jsx
import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

export default function CourseModal({ course, onClose }) {
  return (
    <Dialog open={!!course} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{course.title}</DialogTitle>
      <DialogContent dividers>
        <Typography variant="subtitle2" color="text.secondary">{course.department} • {course.duration}</Typography>
        <Typography sx={{ mt: 1 }}>{course.description}</Typography>

        <Typography sx={{ mt: 2, fontWeight: 700 }}>Syllabus & Highlights</Typography>
        <Typography variant="body2" color="text.secondary">Practical labs, capstone project, internships and industry mentors.</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => window.location = "/admission"} variant="contained">Apply</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
