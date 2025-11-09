// src/components/NoticeBoard.jsx
import React from "react";
import { Tabs, Tab, Box, List, ListItem, ListItemText, Button } from "@mui/material";

export default function NoticeBoard({ notices = [] }) {
  const [tab, setTab] = React.useState(0);

  const filtered = (t) => notices.filter(n => (t === 0 ? n.type === "student" : n.type === "staff"));

  return (
    <Box>
      <Tabs value={tab} onChange={(e, v) => setTab(v)} aria-label="notice-tabs" variant="fullWidth" sx={{ mb: 1 }}>
        <Tab label="Students" />
        <Tab label="Staff" />
      </Tabs>

      <List>
        {filtered(tab).slice(0, 6).map(n => (
          <ListItem key={n.id} secondaryAction={<Button size="small" variant="text">View</Button>}>
            <ListItemText primary={n.title} secondary={new Date(n.date).toLocaleDateString()} />
          </ListItem>
        ))}
        {filtered(tab).length === 0 && <Box sx={{ p: 2, color: "text.secondary" }}>No notices found.</Box>}
      </List>
    </Box>
  );
}
