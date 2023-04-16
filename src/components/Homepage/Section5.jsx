import React from "react";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

import neverMissImage from "../../assets/neopop-fold1.png";
import jblImage from "../../assets/neopop-fold2.png";
import dealsImage from "../../assets/neopop-fold3.png";
import rentImage from "../../assets/neopop-fold4.png";

import "./section5.css";

const scrollData = [
  {
    heading: "we've got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    image: neverMissImage,
  },
  {
    heading: " begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    image: jblImage,
  },
  {
    heading: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    image: dealsImage,
  },
  {
    heading: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    image: rentImage,
  },
];

export default function Section5() {
  const { ref: myRef1, inView: element1Visible } = useInView({
    threshold: 0.35,
  });
  const { ref: myRef2, inView: element2Visible } = useInView({
    threshold: 0.35,
  });
  const { ref: myRef3, inView: element3Visible } = useInView({
    threshold: 0.35,
  });
  const { ref: myRef4, inView: element4Visible } = useInView({
    threshold: 0.35,
  });

  const refArray = [myRef1, myRef2, myRef3, myRef4];

  return (
    <Box className="section5">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{ flexWrap: { sm: "wrap", md: "nowrap" } }}
      >
        <Box sx={{ width: "100%" }}>
          {scrollData.map((content, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0px 20px",
                height: "150vh",
              }}
              ref={refArray[index]}
            >
              <Box>{content.heading}</Box>
              <Box>{content.description}</Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              //   margin: "auto",
              width: "230px",
              height: "410px",
              borderRadius: "3rem",
              position: "sticky",
              padding: "10px",
              paddingBottom: "30px",
              top: 100,
            }}
          >
            {/* image here  */}
            {element1Visible && (
              <Box
                component="img"
                src={scrollData[0].image}
                alt="img"
                width="100%"
                height="100%"
              />
            )}
            {element2Visible && (
              <Box
                component="img"
                src={scrollData[1].image}
                alt="img"
                width="100%"
                height="100%"
              />
            )}
            {element3Visible && (
              <Box
                component="img"
                src={scrollData[2].image}
                alt="img"
                width="100%"
                height="100%"
              />
            )}
            {element4Visible && (
              <Box
                component="img"
                src={scrollData[3].image}
                alt="img"
                width="100%"
                height="100%"
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
