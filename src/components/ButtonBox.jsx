import React from "react";
import { Button } from "@mui/material";

export default function Buttonn({ content }) {
  return (
    <Button
      sx={{
        borderRadius: "2rem",
        padding: "15px 30px",
        backgroundColor: "white",
        color: "black",
        fontWeight: "bold",
      }}
    >
      {content}
    </Button>
  );
}
