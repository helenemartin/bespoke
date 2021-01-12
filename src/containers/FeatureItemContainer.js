import { useSpeechSynthesis } from "react-speech-kit";
import Feature from "../components/feature";
import Flipper from "../components/flipper";

export function FeatureItemContainer({ item }) {
  const { speak } = useSpeechSynthesis();

  return (
    <>
      <Feature key={item.id} direction={item.direction}>
        <Feature.Pane>
          <Feature.Title data-testid="title">{item.title}</Feature.Title>
          <Feature.SubTitle>{item.subTitle}</Feature.SubTitle>
          <Feature.Button
            data-testid="clickable-feature"
            onClick={() => speak({ text: item.spokenText })}
          >
            👄
          </Feature.Button>
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
            </div>
          </Flipper>
        </Feature.Pane>
      </Feature>
    </>
  );
}
