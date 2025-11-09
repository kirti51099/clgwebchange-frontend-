// src/Pages/VirtualTourPage.jsx
import React, { useState, useMemo } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Dialog,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

/**
 * Robust VirtualTourPage
 * - Set VIDEO_LINK below to any YouTube watch URL or embed url.
 * - Puts images in src/assets/virtual/ (Vite) OR uses fallback placeholders.
 *
 * If your page still shows blank:
 *  - open browser console and copy errors (first one) and share it with me.
 */

// --- Put your normal youtube link here (watch or youtu.be or embed). Example:
const VIDEO_LINK = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// const VIDEO_LINK = "https://youtu.be/dQw4w9WgXcQ";
// const VIDEO_LINK = "https://www.youtube.com/embed/dQw4w9WgXcQ";

// helper — convert many youtube url forms to embed url
function toYouTubeEmbed(link) {
  if (!link) return "";
  try {
    // already embed
    if (link.includes("/embed/")) return link;
    // youtu.be short link
    const shortMatch = link.match(/youtu\.be\/([A-Za-z0-9_-]{4,})/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

    // watch?v=VIDEO_ID
    const watchMatch = link.match(/[?&]v=([A-Za-z0-9_-]{4,})/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;

    // if it's already just an id
    const idMatch = link.match(/^([A-Za-z0-9_-]{4,})$/);
    if (idMatch) return `https://www.youtube.com/embed/${idMatch[1]}`;

    return link;
  } catch (err) {
    console.warn("toYouTubeEmbed error", err);
    return link;
  }
}

export default function VirtualTourPage() {
  const [openImage, setOpenImage] = useState(false);
  const [activeImg, setActiveImg] = useState(null);

  // 1) Try to load images automatically (Vite). If this fails, fallback to empty array.
  let imageUrls = [];
  try {
    // This works in Vite projects only
    // eslint-disable-next-line no-undef
    const modules = import.meta.globEager("../assets/virtual/*.{jpg,jpeg,png,webp}");
    imageUrls = Object.values(modules).map((m) => (m && m.default) || m);
    console.log("VirtualTour: loaded images from src/assets/virtual/ →", imageUrls.length);
  } catch (e) {
    console.warn("VirtualTour: import.meta.globEager failed (not Vite or no folder).", e);
    imageUrls = [];
  }

  // 2) If no images found, use safe built-in placeholders so page is not empty.
  const fallbackImages = [
    // Placeholder hosted images (so no local assets required). Replace with your own later.
    "src/assets/virtual/mainentrance.jpg", "src/assets/virtual/clg.jpg", 
    "src/assets/virtual/classroom.avif", "src/assets/virtual/computerlab.jpg",
    "src/assets/virtual/centrallibrary.jpg", "src/assets/virtual/Centrallibrary1.jpg",
    "src/assets/virtual/canteen.jpg","src/assets/virtual/culturalevents.jpg",
   
  ];
  if (imageUrls.length === 0) {
    console.info("VirtualTour: no images found in src/assets/virtual/. Using fallback placeholders.");
    imageUrls = fallbackImages;
  }

  const openLightbox = (src) => {
    setActiveImg(src);
    setOpenImage(true);
  };
  const closeLightbox = () => {
    setOpenImage(false);
    setActiveImg(null);
  };

  // compute embed URL from whatever the user put
  const embedUrl = useMemo(() => toYouTubeEmbed("https://www.youtube.com/watch?v=23VgTH0sf30"), []);

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
        Campus Virtual Tour
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Watch the campus video and browse photos of classrooms, labs, library, hostels and student areas.
      </Typography>

      <Paper sx={{ p: 2, mb: 4 }}>
        {/* If embedUrl is empty show message */}
        {embedUrl ? (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <iframe
              title="Campus Virtual Tour"
              src={embedUrl}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        ) : (
          <Box sx={{ p: 4, textAlign: "center" }}>
            <Typography color="text.secondary">No video configured. Set VIDEO_LINK in the page file.</Typography>
          </Box>
        )}
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
        Photo Gallery
      </Typography>

      {imageUrls.length === 0 ? (
        <Typography color="text.secondary">No gallery images found. Add images to <code>src/assets/virtual/</code>.</Typography>
      ) : (
        <Grid container spacing={3}>
          {imageUrls.map((src, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardActionArea onClick={() => openLightbox(src)}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={src}
                    alt={`virtual-${idx}`}
                    sx={{ objectFit: "cover" }}
                  />
                </CardActionArea>

                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                  <IconButton
                    aria-label="zoom"
                    onClick={() => openLightbox(src)}
                    size="small"
                    sx={{ background: "rgba(255,255,255,0.9)" }}
                  >
                    <ZoomInIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Dialog open={openImage} onClose={closeLightbox} maxWidth="xl">
        <DialogContent sx={{ position: "relative", p: 1, background: "#000" }}>
          <IconButton
            onClick={closeLightbox}
            sx={{ position: "absolute", right: 8, top: 8, color: "#fff", zIndex: 10 }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          {activeImg && (
            <Box
              component="img"
              src={activeImg}
              alt="preview"
              sx={{
                width: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                display: "block",
                mx: "auto",
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      <Box sx={{ mt: 4 }}>
        <Typography variant="caption" color="text.secondary">
          Tip: To use your own photos, create `src/assets/virtual/` and add JPG/PNG files. The page will auto-load them (Vite only). If you copied the file and still see nothing, try restarting the dev server.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Button size="small" onClick={() => console.log("VirtualTour debug — embedUrl:", embedUrl)}>
            Debug: log embed URL
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
