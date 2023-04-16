import { Box, Button } from "@mui/material";
import React from "react";

import "./section4.css";
import Buttonn from "../ButtonBox";

export default function Section4() {
  return (
    <Box className="section section4">
      <Box>
        <Box className="heading">we take your money matters seriously.</Box>
        <Box
          marginTop="16px"
          sx={{
            textAlign: { sm: "left", md: "center", lg: "justify" },
            fontSize: { sm: "15px", md: "20", lg: "25px" },
          }}
        >
          so that you don't have to.
        </Box>
        <Box>
          never miss a due date with reminders to help you pay your bills on
          time, instant settlements mean you never wait for your payments to go
          through and statement analysis lets you know where your money goes,
          always.
        </Box>
        <Box
          sx={{ marginTop: "50px", textAlign: { sm: "left", md: "center" } }}
        >
          <Buttonn content="Experience the upgrade" />
        </Box>
      </Box>
    </Box>
  );
}
