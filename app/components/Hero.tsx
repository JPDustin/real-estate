import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Box sx={{ position: "relative", height: { xs: 420, md: 640 } }}>
      <Image
        src="https://images.unsplash.com/photo-1749045426329-9cfad35ccdb4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Mount Monadnock, New Hampshire"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <Container sx={{ position: "relative", zIndex: 2, height: "100%" }}>
        <Stack
          justifyContent="center"
          alignItems="flex-start"
          sx={{ height: "100%" }}
          spacing={2}
        >
          <Typography variant="h2" color="#fff">
            Luxury Homes in the Monadnock Region
          </Typography>
          <Typography variant="h6" color="#fff">
            Lakefront retreats, historic estates, and countryside living in
            Southwestern NH.
          </Typography>

          <Button
            size="large"
            variant="contained"
            color="secondary"
            component={Link}
            href="/listings"
          >
            Browse Listings
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
