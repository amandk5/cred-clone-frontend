import { Box } from "@mui/material";
import React from "react";
import "./section1.css";
import Buttonn from "../ButtonBox";

export default function Section1() {
  return (
    <Box className="section section1">
      <Box>
        <Box className="heading">rewards for paying credit card bills.</Box>
        <Box
          marginTop="35px"
          sx={{
            textAlign: { sm: "left", md: "center" },
            fontSize: { sm: "15px", md: "20", lg: "25px" },
          }}
        >
          join 9M+ members who win rewards and cashbacks everyday
        </Box>
        <Box
          sx={{ marginTop: "50px", textAlign: { sm: "left", md: "center" } }}
        >
          <Buttonn content="Download CRED" />
        </Box>
      </Box>
    </Box>
  );
}
