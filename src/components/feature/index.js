import React from "react";
import {
  Container,
  Item,
  Inner,
  Title,
  SubTitle,
  Image,
  Pane
} from "./styles/feature";

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
Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Feature.SubTitle = function FeatureTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Feature.Pane = function FeatureTitle({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Feature.Image = function FeatureImage({ ...restProps }) {
  return <Image {...restProps} />;
};
