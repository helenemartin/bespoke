import React, { useEffect } from "react";
import { FeatureContainer } from "../containers/FeatureContainer";
import Navbar from "../components/nav/Navbar";

export default function Home() {
  function enableShrink() {
    const logo = document.getElementById("logoShrink");
    console.log("scrollY", window.scrollY);
    if (window.scrollY > 60) {
      logo.style.fontSize = "100px";
    } else {
      logo.style.fontSize = "3rem";
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", enableShrink);
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <FeatureContainer />
      </div>

      {/* <div style={{ background: "red", height: "100vh" }}></div> */}
    </>
  );
}
