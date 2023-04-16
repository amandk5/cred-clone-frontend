import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./section2Styles.css";
import Buttonn from "../ButtonBox";

export default function Section2() {
  return (
    <Box className="section section2">
      <Box>
        <Box className="heading">feel special more often.</Box>
        <Box
          marginTop="35px"
          sx={{
            textAlign: { sm: "left", md: "center" },
            fontSize: { sm: "15px", md: "20", lg: "25px" },
          }}
        >
          exclusive rewards for paying your bills
        </Box>
        <Typography mt="10px">
          every time you pay your credit card bills on CRED, you receive CRED
          coins. you can use these to win exclusive rewards or get special
          access to curated products and experiences. on CRED, good begets good.
        </Typography>
        <Box
          sx={{ marginTop: "50px", textAlign: { sm: "left", md: "center" } }}
        >
          <Buttonn content="Explore rewards" />
        </Box>
      </Box>
    </Box>
  );
}
