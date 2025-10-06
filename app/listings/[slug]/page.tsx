import { notFound } from "next/navigation";
import { listings } from "@/lib/data";
import { Box, Chip, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ContactForm from "../..//components/ContactForm";

export default function ListingDetail({
  params,
}: {
  params: { slug: string };
}) {
  const listing = listings.find((l) => l.slug === params.slug);
  if (!listing) return notFound();

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        {listing.title}
      </Typography>
      <Typography variant="h5" color="secondary.main" gutterBottom>
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(listing.price)}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 240, md: 520 },
          mb: 3,
        }}
      >
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          style={{ objectFit: "cover", borderRadius: 14 }}
        />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom>
            Property Details
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
            <Chip label={`${listing.bedrooms} Bed`} />
            <Chip label={`${listing.bathrooms} Bath`} />
            <Chip label={`${listing.area.toLocaleString()} sq ft`} />
            <Chip label={`${listing.city}, ${listing.country}`} />
          </Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {listing.description}
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6" gutterBottom>
            Highlights
          </Typography>
          <Box component="ul" sx={{ pl: 3, m: 0 }}>
            {listing.highlights.map((h) => (
              <li key={h}>
                <Typography variant="body1">{h}</Typography>
              </li>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <ContactForm listingTitle={listing.title} />
        </Grid>
      </Grid>
    </Container>
  );
}
