import React from "react";
import featureData from "../fixtures/feature.json";
import Feature from "../components/feature";
import { FeatureItemContainer } from "./FeatureItemContainer";

export function FeatureContainer() {
  return (
    <Feature.Container>
      {featureData.map((item) => (
        <FeatureItemContainer item={item} key={item.id} />
      ))}
    </Feature.Container>
  );
}
