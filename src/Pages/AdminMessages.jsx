// // src/Pages/AdminMessages.jsx
import React, { useEffect, useState } from "react";
import {
  Container, Paper, Table, TableBody, TableCell, TableHead, TableRow,
  IconButton, Typography, Button, Drawer, Box, Chip, Pagination
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { getMessages, markMessageRead, deleteMessage } from "../services/api";

export default function AdminMessages() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);
  const [selected, setSelected] = useState(null);

  useEffect(() => { fetchPage(1); }, []);

  async function fetchPage(p = 1) {
    try {
      const data = await getMessages(p, limit);
      setItems(data.items || []);
      setTotal(data.total || 0);
      setPage(data.page || p);
    } catch (e) {
      console.error("getMessages failed:", e);
      const msg = e?.message || e?.error || "Failed to fetch messages. Are you logged in?";
      alert(msg);
    }
  }

  async function toggleRead(id, newRead) {
    try {
      await markMessageRead(id, newRead);
      fetchPage(page);
    } catch (e) {
      console.error("markMessageRead failed:", e);
      alert(e?.message || "Update failed");
    }
  }

  async function removeMsg(id) {
    if (!confirm("Delete message?")) return;
    try {
      await deleteMessage(id);
      fetchPage(page);
    } catch (e) {
      console.error("deleteMessage failed:", e);
      alert(e?.message || "Delete failed");
    }
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Admin — Messages</Typography>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>From</TableCell>
              <TableCell>Subject / Preview</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Received</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map(m => (
              <TableRow key={m._id} hover>
                <TableCell>
                  <Typography sx={{ fontWeight: 700 }}>{m.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{m.email}</Typography>
                  <Box sx={{ mt: 1 }}>
                    {m.read ? <Chip label="Read" size="small" /> : <Chip label="Unread" size="small" color="warning" />}
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography sx={{ fontWeight: 700 }}>{m.subject || "—"}</Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>{m.message}</Typography>
                </TableCell>

                <TableCell>{m.phone || "—"}</TableCell>
                <TableCell>{new Date(m.createdAt).toLocaleString()}</TableCell>

                <TableCell align="right">
                  <IconButton onClick={() => setSelected(m)} title="View"><VisibilityIcon /></IconButton>
                  <IconButton onClick={() => toggleRead(m._id, !m.read)} title={m.read ? "Mark unread" : "Mark read"}>
                    <MarkEmailReadIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => removeMsg(m._id)} title="Delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {items.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                  No messages
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.max(1, Math.ceil(total / limit))}
          page={page}
          onChange={(e, v) => fetchPage(v)}
          color="primary"
        />
      </Box>

      <Drawer anchor="right" open={!!selected} onClose={() => setSelected(null)}>
        <Box sx={{ width: 520, p: 3 }}>
          {selected ? (
            <>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>{selected.subject || "Message"}</Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                {selected.name} — {selected.email} • {selected.phone || "—"}
              </Typography>
              <Box sx={{ whiteSpace: "pre-wrap" }}>{selected.message}</Box>

              <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => { toggleRead(selected._id, !selected.read); setSelected(null); }}
                >
                  {selected.read ? "Mark unread" : "Mark read"}
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => { removeMsg(selected._id); setSelected(null); }}
                >
                  Delete
                </Button>
              </Box>
            </>
          ) : <Typography>Loading...</Typography>}
        </Box>
      </Drawer>
    </Container>
  );
}
