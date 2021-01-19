import { useSpeechSynthesis } from "react-speech-kit";
import { useMemo } from "react";
import Feature from "../components/feature";
import Flipper from "../components/flipper";

export function FeatureItemContainer({ item }) {
  const { speak, voices } = useSpeechSynthesis();
  console.log(voices);
  const Karen = useMemo(
    () => voices.filter(value => value.name === "Karen")[0],
    [voices]
  );

  console.log(Karen);
  return (
    <>
      <Feature key={item.id} direction={item.direction}>
        <Feature.Pane>
          <Feature.Title data-testid="title">{item.title}</Feature.Title>
          <Feature.SubTitle>{item.subTitle}</Feature.SubTitle>
        </Feature.Pane>
        <Feature.Pane>
          <Flipper>
            <Feature.Image
              src={process.env.PUBLIC_URL + "/" + item.image}
              alt={item.alt}
            />
            <div>
              <Feature.Image
                src={process.env.PUBLIC_URL + "/" + item.image2}
                alt={item.alt}
              />
              <Feature.Button
                data-testid="clickable-feature"
                onClick={() => speak({ text: item.spokenText, voice: Karen })}
              >
                👄
              </Feature.Button>
            </div>
          </Flipper>
        </Feature.Pane>
      </Feature>
    </>
  );
}
