import { useSpeechSynthesis } from "react-speech-kit";
import Feature from "../components/feature";

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
          <Feature.Flipper>
            <Feature.InnerFrame>
              <Feature.Front>
                <Feature.Image src={item.image} alt={item.alt} />
              </Feature.Front>
              <Feature.Back>
                <Feature.Image src={item.image2} alt={item.alt} />
              </Feature.Back>
            </Feature.InnerFrame>
          </Feature.Flipper>
        </Feature.Pane>
      </Feature>
    </>
  );
}
