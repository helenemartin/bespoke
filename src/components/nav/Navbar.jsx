import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: ${({ shrinkNav }) => (shrinkNav ? "90px" : "150px")};
  border-bottom: 2px solid #f1f1f1;
  background-color: white;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: height 0.5s;

  .logo {
    font-family: "Avenir", sans-serif;
    font-size: ${({ shrink }) => (shrink ? "3rem" : "100px")};
    padding: 15px 0;
    transition: font-size 2s;
  }
`;

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [shrinkNav, setShrinkNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShrink(window.scrollY > 60);
      setShrinkNav(window.scrollY > 870);
    });
  }, [setShrink]);

  return (
    <Nav shrink={shrink} shrinkNav={shrinkNav}>
      <div className="logo" id="logoShrink">
        Bespoke
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
