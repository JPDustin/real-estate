"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container>
        <Toolbar sx={{ justifyContent: "space-between", px: 0 }}>
          <Typography variant="h6" fontFamily="var(--lux-font-heading)">
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              LUXURY
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
            <Link href="/listings">Listings</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
            <Button variant="outlined" component={Link} href="/listings">
              Explore
            </Button>
          </Box>
          <IconButton sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
