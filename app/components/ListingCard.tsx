import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import type { Listing } from "@/lib/data";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Card elevation={3} sx={{ overflow: "hidden" }}>
      <CardActionArea component={Link} href={`/listings/${listing.slug}`}>
        <div style={{ position: "relative", width: "100%", height: 200 }}>
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <CardContent>
          <Stack spacing={0.5}>
            <Typography variant="h6">{listing.title}</Typography>
            <Typography variant="subtitle2" color="secondary.main">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(listing.price)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {listing.city}, {listing.country}
            </Typography>
            <Typography variant="body2">
              {listing.bedrooms} bd • {listing.bathrooms} ba •{" "}
              {listing.area.toLocaleString()} sf
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
