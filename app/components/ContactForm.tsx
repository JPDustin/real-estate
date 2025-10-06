"use client";
import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ContactForm({
  listingTitle,
}: {
  listingTitle: string;
}) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      // TODO: wire to backend/email service
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  if (sent)
    return (
      <Alert severity="success">
        Thanks! We&apos;ll contact you shortly about “{listingTitle}”.
      </Alert>
    );

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <Typography variant="h6">Schedule a Viewing</Typography>
        <TextField required label="Name" />
        <TextField required label="Email" type="email" />
        <TextField label="Phone" />
        <TextField
          label="Message"
          multiline
          rows={4}
          defaultValue={`I&apos;m interested in ${listingTitle}.`}
        />
        <Button type="submit" variant="contained">
          Send Inquiry
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </form>
  );
}
