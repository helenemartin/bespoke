import React from "react";
import { FeatureContainer } from "../containers/FeatureContainer";
import Navbar from "../components/nav/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <div style={{ background: "#B69D76", height: "100vh" }}></div> */}
      <FeatureContainer />
      <div style={{ background: "#C9A398", height: "100vh" }}></div>
    </div>
  );
}
