// src/Pages/ContactPage.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Stack,
  Divider,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

// inside ContactPage.jsx handleSubmit
async function handleSubmit(e) {
  e.preventDefault();
  setStatus("Sending...");
  console.log("Contact submit:", form);

  try {
    // Use full backend URL or change to '/api/contact' if you use Vite proxy (see next section)
    const url = "http://clgsite-backend.vercel.app//api/contact";
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    // Log status & response
    let body = null;
    try { body = await res.json(); } catch (e) { body = await res.text().catch(()=>null); }
    console.log("Contact response:", res.status, body);

    if (res.ok) {
      setStatus("Message sent successfully ✅");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus(`Failed to send ❌ — ${body?.error || body || res.status}`);
    }
  } catch (err) {
    console.error("Network/Fetch error:", err);
    setStatus("Error connecting to server ❌ — " + (err.message || err));
  }
}





  return (
    <Box sx={{ background: "linear-gradient(135deg, #0b3c89, #001a4d)", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            textAlign: "center",
            mb: 4,
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          Contact Us
        </Typography>

        {/* Info Cards */}

        {/* --- Contact Info Section (Centered Icons) --- */}
<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    mb: 6,
  }}
>
  <Typography
    variant="h4"
    sx={{
      fontWeight: 800,
      mb: 4,
      textTransform: "uppercase",
      color: "#FFD700",
      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    }}
  >
    Get in Touch
  </Typography>

  <Grid
    container
    spacing={4}
    justifyContent="center"
    sx={{
      maxWidth: "1000px",
    }}
  >
    {/* --- Address --- */}
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          p: 4,
          borderRadius: 4,
          textAlign: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, #ffffff, #e6ecff)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          },
        }}
      >
        <LocationOnIcon sx={{ fontSize: 60, color: "#0b3c89", mb: 2 }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, color: "#0b3c89", mb: 1 }}
        >
          Our Address
        </Typography>
        <Typography variant="body2" sx={{ color: "#333", lineHeight: 1.6 }}>
          D.Y. Patil College of Engineering & Technology, <br />
          Kasaba Bawada, Kolhapur, Maharashtra – 416006
        </Typography>
      </Card>
    </Grid>

    {/* --- Call Us --- */}
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          p: 4,
          borderRadius: 4,
          textAlign: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, #ffffff, #e6ecff)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          },
        }}
      >
        <PhoneIcon sx={{ fontSize: 60, color: "#0b3c89", mb: 2 }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, color: "#0b3c89", mb: 1 }}
        >
          Call Us
        </Typography>
        <Typography variant="body2" sx={{ color: "#333", lineHeight: 1.6 }}>
          +91 231 2601433 / 2601434 <br />
          Mon – Sat, 9:00 AM – 5:30 PM
        </Typography>
      </Card>
    </Grid>

    {/* --- Email Us --- */}
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          p: 4,
          borderRadius: 4,
          textAlign: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, #ffffff, #e6ecff)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          },
        }}
      >
        <EmailIcon sx={{ fontSize: 60, color: "#0b3c89", mb: 2 }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, color: "#0b3c89", mb: 1 }}
        >
          Email Us
        </Typography>
        <Typography variant="body2" sx={{ color: "#333", lineHeight: 1.6 }}>
          info@dypgroup.edu.in <br />
          principal@dypengg.ac.in
        </Typography>
      </Card>
    </Grid>
  </Grid>
</Box>

       {/* <Grid container spacing={3} sx={{ mb: 5 }}>
  <Grid item xs={12} md={4}>
    <Card
      sx={{
        p: 4,
        borderRadius: 3,
        textAlign: "center",
        height: "100%",
        background: "linear-gradient(135deg, #ffffff, #f2f6ff)",
        boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 18px rgba(0,0,0,0.2)",
        },
      }}
    >
      <LocationOnIcon sx={{ fontSize: 50, color: "#0b3c89" }} />
      <Typography variant="h6" sx={{ mt: 1, fontWeight: 800, color: "#0b3c89" }}>
        Our Address
      </Typography>
      <Typography variant="body2" sx={{ color: "#333", mt: 1 }}>
        D.Y. Patil College of <br></br>Engineering & Technology, <br />
        Kasaba Bawada, Kolhapur, Maharashtra – 416006
      </Typography>
    </Card>
  </Grid>

  <Grid item xs={12} md={4}>
    <Card
      sx={{
        p: 4,
        borderRadius: 3,
        textAlign: "center",
        height: "100%",
        background: "linear-gradient(135deg, #ffffff, #f2f6ff)",
        boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 18px rgba(0,0,0,0.2)",
        },
      }}
    >
      <PhoneIcon sx={{ fontSize: 50, color: "#0b3c89" }} />
      <Typography variant="h6" sx={{ mt: 1, fontWeight: 800, color: "#0b3c89" }}>
        Call Us
      </Typography>
      <Typography variant="body2" sx={{ color: "#333", mt: 1 }}>
        +91 231 2601433 / 2601434 <br />
        Mon – Sat, 9:00 AM – 5:30 PM
      </Typography>
    </Card>
  </Grid>

  <Grid item xs={12} md={4}>
    <Card
      sx={{
        p: 4,
        borderRadius: 3,
        textAlign: "center",
        height: "100%",
        background: "linear-gradient(135deg, #ffffff, #f2f6ff)",
        boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 18px rgba(0,0,0,0.2)",
        },
      }}
    >
      <EmailIcon sx={{ fontSize: 50, color: "#0b3c89" }} />
      <Typography variant="h6" sx={{ mt: 1, fontWeight: 800, color: "#0b3c89" }}>
        Email Us
      </Typography>
      <Typography variant="body2" sx={{ color: "#333", mt: 1 }}>
        info@dypgroup.edu.in <br />
        principal@dypengg.ac.in
      </Typography>
    </Card>
  </Grid>
</Grid> */}


        {/* Contact Form */}
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 3,
            background: "white",
            color: "black",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, textAlign: "center" }}>
            Send us a Message
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Stack>

            <TextField
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                mt: 1,
                bgcolor: "#0b3c89",
                color: "white",
                fontWeight: 700,
                "&:hover": { bgcolor: "#002c6d" },
              }}
            >
              Send Message
            </Button>

            {status && (
              <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                {status}
              </Typography>
            )}
          </Box>
        </Paper>

        {/* Divider */}
        <Divider sx={{ my: 6, bgcolor: "rgba(255,255,255,0.4)" }} />

        {/* Google Map */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 2,
            fontWeight: 800,
          }}
        >
          Visit Our Campus
        </Typography>

        <Box
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            height: { xs: 300, md: 400 },
          }}
        >
          <iframe
            title="DYP Kolhapur Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0907243232014!2d74.22933937483813!3d16.71962612101915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10000c32fbe77%3A0xf35ae2a58fa7242b!2sDr.%20D.Y.%20Patil%20College%20of%20Engineering%20%26%20Technology%2C%20Kasaba%20Bawada%2C%20Kolhapur!5e0!3m2!1sen!2sin!4v1700043795019!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>

        {/* Social Icons */}
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
          <IconButton href="https://www.facebook.com/dypcetkolhapur" target="_blank" sx={{ color: "white" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/dypcetkolhapur" target="_blank" sx={{ color: "white" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/school/dypcetkolhapur/" target="_blank" sx={{ color: "white" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>

        <Typography variant="caption" sx={{ display: "block", mt: 2, textAlign: "center", opacity: 0.8 }}>
          © 2025 D.Y. Patil College of Engineering & Technology, Kolhapur
        </Typography>
      </Container>
    </Box>
  );
}
