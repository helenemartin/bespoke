import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";

const Ul = styled.ul`
  z-index: 1;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    filter: opacity(0.9);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.9s ease-in-out;
    margin: 0;

    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to={HOME}>Home</Link>
      </li>
      <li>Projects</li>
      <li>Home</li>
      <li>Info</li>
    </Ul>
  );
};

export default RightNav;
