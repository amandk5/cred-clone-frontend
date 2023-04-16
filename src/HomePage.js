import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section2 from "./components/Homepage/Section2";
import Section3 from "./components/Homepage/Section3";
import Section4 from "./components/Homepage/Section4";
import Section5 from "./components/Homepage/Section5";
import Section6 from "./components/Homepage/Section6";
import Section7 from "./components/Homepage/Section7";
import Section8 from "./components/Homepage/Section8";
import Section1 from "./components/Homepage/Section1";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* 1st section  */}
      <Section1 />
      {/* 2nd section  */}
      <Section2 />
      {/* 3rd section  */}
      <Section3 />
      {/* 4th section  */}
      <Section4 />
      {/* 5th section  */}
      <Section5 />
      {/* 6th section  */}
      <Section6 />
      {/* 7th section  */}
      <Section7 />
      {/* 8th section  */}
      <Section8 />
    </>
  );
}
