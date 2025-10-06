import Hero from "./components/Hero";
import FeaturedListings from "./components/FeaturedListings";
import Highlights from "./components/Highlights";
import BlogPreview from "./components/BlogPreview";
import { Box, Container } from "@mui/material";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <FeaturedListings />
        <Box sx={{ my: { xs: 6, md: 10 } }}>
          <Highlights />
        </Box>
        <BlogPreview />
      </Container>
    </main>
  );
}
