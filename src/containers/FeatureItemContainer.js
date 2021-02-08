import Feature from "../components/feature";
import Flipper from "../components/flipper";

export function FeatureItemContainer({ item, speak, voice }) {
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
              loading="lazy"
            />
            <div>
              <Feature.Image
                src={process.env.PUBLIC_URL + "/" + item.image2}
                alt={item.alt}
                loading="lazy"
              />

              <Feature.Button
                data-testid="clickable-feature"
                onClick={() => speak({ text: item.spokenText, voice: voice })}
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
