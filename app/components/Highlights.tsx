import { Grid, Paper, Stack, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import VerifiedIcon from "@mui/icons-material/Verified";
import PlaceIcon from "@mui/icons-material/Place";

export default function Highlights() {
  const items = [
    {
      icon: <VerifiedIcon />,
      title: "Curated by Experts",
      text: "Every listing is vetted for quality and authenticity.",
    },
    {
      icon: <DiamondIcon />,
      title: "Exclusive Properties",
      text: "Access to premium homes not found elsewhere.",
    },
    {
      icon: <PlaceIcon />,
      title: "Premier Locations",
      text: "From Miami to Dubai and beyond.",
    },
  ];
  return (
    <Grid container spacing={2}>
      {items.map((i) => (
        <Grid item xs={12} md={4} key={i.title}>
          <Paper variant="outlined" sx={{ p: 3, height: "100%" }}>
            <Stack spacing={1}>
              {i.icon}
              <Typography variant="h6">{i.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {i.text}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
