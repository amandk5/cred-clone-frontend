import { Box, Button } from "@mui/material";
import React from "react";
import "./section7.css";

export default function Section7() {
  return (
    <Box className="section section7">
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Box>
          <Box>security first. and second.</Box>
          <Box marginTop="16px">what's yours remains only yours.</Box>
        </Box>
        <Box>
          <Box>
            CRED ensures that all your personal data and transactions are
            encrypted, and secured so what's yours remains only yours. there's
            no room for mistakes because we didn't leave any.
          </Box>
          <Button>Experience the upgrade</Button>
        </Box>
      </Box>
    </Box>
  );
}
