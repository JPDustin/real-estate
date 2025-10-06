"use client";
import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0A0A0A" },
    secondary: { main: "#9C7B16" }, // subtle gold
    background: { default: "#FFFFFF" },
  },
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    h1: { fontFamily: "var(--lux-font-heading)", fontWeight: 600 },
    h2: { fontFamily: "var(--lux-font-heading)", fontWeight: 600 },
    h3: { fontFamily: "var(--lux-font-heading)", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
});
