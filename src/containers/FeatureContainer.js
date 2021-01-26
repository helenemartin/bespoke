import React from "react";
import featureData from "../fixtures/feature.json";
import Feature from "../components/feature";
import { FeatureItemContainer } from "./FeatureItemContainer";
import { useSpeechSynthesis } from "react-speech-kit";
import { useMemo } from "react";

function shuffleArray(sorting) {
  const cardDeck = [...sorting];
  const deal = [];
  for (let count = 0; count < sorting.length; count += 1) {
    deal.push(
      cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1)[0]
    );
  }
  return deal;
}

export function FeatureContainer() {
  const { speak, voices } = useSpeechSynthesis();
  console.log(voices);
  const Karen = useMemo(
    () => voices.filter(value => value.name === "Karen")[0],
    [voices]
  );

  return (
    <Feature.Container>
      {shuffleArray(featureData).map(item => (
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
