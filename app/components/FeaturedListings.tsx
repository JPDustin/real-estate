import { Grid, Typography } from "@mui/material";
import { listings, type Listing } from "@/lib/data";
import ListingCard from "./ListingCard";

export default function FeaturedListings() {
  const featured = listings.slice(0, 4);
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Featured Listings
      </Typography>
      <Grid container spacing={3}>
        {featured.map((l: Listing) => (
          <Grid item xs={12} sm={6} md={3} key={l.slug}>
            <ListingCard listing={l} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
