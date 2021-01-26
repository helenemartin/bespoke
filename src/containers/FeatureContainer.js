import React from "react";
import featureData from "../fixtures/feature.json";
import Feature from "../components/feature";
import { FeatureItemContainer } from "./FeatureItemContainer";
import { useSpeechSynthesis } from "react-speech-kit";
import { useMemo } from "react";

function shuffleArray() {
  const indexes = [2, 0, 1];
  const randomArray = [
    featureData[indexes[0]],
    featureData[indexes[1]],
    featureData[indexes[2]]
  ];
  return randomArray;
}
export function FeatureContainer() {
  const { speak, voices } = useSpeechSynthesis();
  console.log(voices);
  const Karen = useMemo(
    () => voices.filter(value => value.name === "Karen")[0],
    [voices]
  );

  console.log(Karen);
  const randomFeatureData = shuffleArray();

  return (
    <Feature.Container>
      {randomFeatureData.map(item => (
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
