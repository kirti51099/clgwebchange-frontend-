// src/Pages/AdminLogin.jsx
import React, { useEffect, useState } from "react";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    // ensure no stale/invalid token blocks the login page
    localStorage.removeItem("token");
  }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      const { token } = await login(email, password); // backend returns { token }
      localStorage.setItem("token", token);           // store plain JWT
      nav("/admin/messages");
    } catch (err) {
      alert(err.message || "Login failed. Check credentials.");
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Admin Login</Typography>
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <TextField label="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <TextField label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <Button type="submit" variant="contained">Login</Button>
        </form>
      </Paper>
    </Container>
  );
}
