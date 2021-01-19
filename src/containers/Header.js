import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import Navbar from "../components/nav/Navbar";

export function HeaderContainer({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <Header>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src={process.env.PUBLIC_URL + "/" + "images/dolly.jpg"}
            alt="Bespoke"
          />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
      </Header>
    </>
  );
}
