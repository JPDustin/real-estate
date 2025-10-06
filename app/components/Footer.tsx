import { Box, Container, Divider, Stack, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8, py: 6, background: "#f8f8f8" }}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="subtitle1">
            © {new Date().getFullYear()} LUXURY
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Curated by experts • Exclusive properties • Premier locations
          </Typography>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" color="text.secondary">
          This is a demo UI. Replace with brand + legal links.
        </Typography>
      </Container>
    </Box>
  );
}
