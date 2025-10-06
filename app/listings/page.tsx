"use client";
import { Container, Grid, Typography, Pagination, Box } from "@mui/material";
import FilterBar from "../components/FilterBar";
import ListingCard from "../components/ListingCard";
import { useMemo, useState } from "react";
import { listings } from "@/lib/data";

export default function ListingsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState<string | null>(null);
  const [price, setPrice] = useState<[number, number]>([500000, 5000000]);
  const pageSize = 8;
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      const matchesQuery = (l.title + " " + l.city + " " + l.country)
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesLoc = location
        ? l.city === location || l.country === location
        : true;
      const matchesPrice = l.price >= price[0] && l.price <= price[1];
      return matchesQuery && matchesLoc && matchesPrice;
    });
  }, [query, location, price]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Explore Our Exclusive Properties
      </Typography>
      <FilterBar
        onQueryChange={setQuery}
        onLocationChange={setLocation}
        onPriceChange={setPrice}
      />
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {pageItems.map((l) => (
          <Grid key={l.slug} item xs={12} sm={6} md={3}>
            <ListingCard listing={l} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, p) => setPage(p)}
        />
      </Box>
    </Container>
  );
}
