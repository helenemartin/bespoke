import React from "react";
import { FeatureContainer } from "../containers/FeatureContainer";
import { HeaderContainer } from "../containers/Header";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <p>Hello</p>
      </HeaderContainer>
      <FeatureContainer />;
    </>
  );
}
