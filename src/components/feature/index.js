import React from "react";
import { Container, Item, Inner } from "./styles/feature";

export default function Feature({ children, direction = "row", ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Feature.Container = function FeatureContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Feature.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
