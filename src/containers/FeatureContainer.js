import React from "react";
import featureData from "../fixtures/feature.json";
import Feature from "../components/feature";
import { FeatureItemContainer } from "./FeatureItemContainer";
import { useSpeechSynthesis } from "react-speech-kit";
import { useMemo } from "react";

export function FeatureContainer() {
  const { speak, voices } = useSpeechSynthesis();
  console.log(voices);
  const Karen = useMemo(
    () => voices.filter(value => value.name === "Karen")[0],
    [voices]
  );

  console.log(Karen);
  return (
    <Feature.Container>
      {featureData.map(item => (
        <FeatureItemContainer
          item={item}
          key={item.id}
          speak={speak}
          voice={Karen}
        />
      ))}
    </Feature.Container>
  );
}
