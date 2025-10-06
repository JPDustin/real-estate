import { Grid, Paper, Stack, Typography } from "@mui/material";
export default function BlogPreview() {
  const posts = [
    {
      title: "2025 Luxury Market Outlook",
      excerpt: "Key trends shaping prime property values this year.",
    },
    {
      title: "Designing a Timeless Estate",
      excerpt: "Architectural basics for enduring elegance.",
    },
    {
      title: "The Rise of Smart Villas",
      excerpt: "How automation elevates comfort and security.",
    },
  ];
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Latest Articles
      </Typography>
      <Grid container spacing={2}>
        {posts.map((p) => (
          <Grid key={p.title} item xs={12} md={4}>
            <Paper variant="outlined" sx={{ p: 3, height: "100%" }}>
              <Stack spacing={1}>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.excerpt}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
