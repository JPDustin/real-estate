"use client";
import { Box, TextField, MenuItem, Slider, Stack } from "@mui/material";

const LOCATIONS = [
  "Keene",
  "Peterborough",
  "Harrisville",
  "Jaffrey",
  "Walpole",
  "Chesterfield",
  "Dublin",
  "Marlborough",
];

export default function FilterBar({
  onQueryChange,
  onLocationChange,
  onPriceChange,
}: {
  onQueryChange: (q: string) => void;
  onLocationChange: (loc: string | null) => void;
  onPriceChange: (p: [number, number]) => void;
}) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      alignItems="center"
      sx={{ my: 2 }}
    >
      <TextField
        label="Search"
        placeholder="City, country, style"
        fullWidth
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <TextField
        label="Location"
        select
        defaultValue=""
        sx={{ minWidth: 200 }}
        onChange={(e) => onLocationChange(e.target.value || null)}
      >
        <MenuItem value="">Any</MenuItem>
        {LOCATIONS.map((loc) => (
          <MenuItem key={loc} value={loc}>
            {loc}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ flex: 1 }}>
        <Slider
          defaultValue={[500000, 5000000]}
          min={100000}
          max={10000000}
          step={50000}
          onChangeCommitted={(_, v) => onPriceChange(v as [number, number])}
          valueLabelDisplay="auto"
        />
      </Box>
    </Stack>
  );
}
