import { render, screen, fireEvent } from "@testing-library/react";
import { FeatureItemContainer } from "../../containers/FeatureItemContainer";

const mockSpeak = jest.fn();

jest.mock("react-speech-kit", () => ({
  useSpeechSynthesis: () => ({
    speak: mockSpeak,
  }),
}));

describe("FeatureItemContainer Test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render title", () => {
    // given
    const expectedItem = {
      id: 1,
      title: "One",
      subTitle: "Click the button",
      image: "/images/fleischmann-gusti.jpg",
      alt: "bla",
      direction: "row",
      spokenText: "Hello",
    };

    // when
    const { container } = render(<FeatureItemContainer item={expectedItem} />);

    // then
    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title").textContent).toBe(expectedItem.title);
  });

  test("should invoke speak when clicking the item", () => {
    // given
    const expectedItem = {
      spokenText: "Hello world",
    };
    render(<FeatureItemContainer item={expectedItem} />);

    // when
    fireEvent.click(screen.getByTestId("clickable-feature"));

    // then
    expect(mockSpeak).toBeCalledTimes(1);
    expect(mockSpeak).toBeCalledWith({ text: expectedItem.spokenText });
  });
});
