import React from "react";
import featureData from "../fixtures/feature.json";
import Feature from "../components/feature";

export function FeatureContainer() {
  return (
    <Feature.Container>
      {featureData.map(item => (
        <Feature key={item.id} direction={item.direction}>
          <Feature.Pane>
            <Feature.Title>{item.title}</Feature.Title>
            <Feature.SubTitle>{item.subTitle}</Feature.SubTitle>
          </Feature.Pane>
          <Feature.Pane>
            <Feature.Image src={item.image} alt={item.alt} />
          </Feature.Pane>
        </Feature>
      ))}
    </Feature.Container>
  );
}
