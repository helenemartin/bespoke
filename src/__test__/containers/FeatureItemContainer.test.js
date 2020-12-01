import { render, screen, fireEvent } from "@testing-library/react";
import { FeatureItemContainer } from "../../containers/FeatureItemContainer";

describe("FeatureItemContainer Test", () => {
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
    // expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title").textContent).toBe(expectedItem.title);
  });
});
