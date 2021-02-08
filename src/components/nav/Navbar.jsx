import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 150px;
  border-bottom: 2px solid #f1f1f1;
  background-color: white;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;

  .logo {
    font-familly: "Avenir", sans-serif;
    font-size: 3rem;
    padding: 15px 0;
    transition: 0.5s;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo" id="logoShrink">
        Bespoke
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
