import { useSpeechSynthesis } from "react-speech-kit";
import Feature from "../components/feature";

export function FeatureItemContainer({ item }) {
  const { speak } = useSpeechSynthesis();

  return (
    <button
      data-testid="clickable-feature"
      onClick={() => speak({ text: item.spokenText })}
    >
      <Feature key={item.id} direction={item.direction}>
        <Feature.Pane>
          <Feature.Title data-testid="title">{item.title}</Feature.Title>
          <Feature.SubTitle>{item.subTitle}</Feature.SubTitle>
        </Feature.Pane>
        <Feature.Pane>
          <Feature.Image src={item.image} alt={item.alt} />
        </Feature.Pane>
      </Feature>
    </button>
  );
}
