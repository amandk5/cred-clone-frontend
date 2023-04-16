import { Box } from "@mui/material";
import React from "react";

import brands from "../../assets/brands-desktop.png";
import "./section3.css";

export default function Section3() {
  return (
    <Box className="section3">
      <Box>
        <Box sx={{ fontSize: { sm: "15px", md: "20", lg: "25px" } }}>
          rewards from brands you love.{" "}
        </Box>
        <Box
          component="img"
          sx={{ width: "100%", marginTop: "50px" }}
          src={brands}
          alt="brands"
        ></Box>
      </Box>
    </Box>
  );
}
