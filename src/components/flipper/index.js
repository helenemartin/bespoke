import React from "react";
import { Outer, InnerFrame, Front, Back } from "./styles/flipper";

export default function Flipper({ children }) {
  return (
    <Outer>
      <InnerFrame>
        {React.Children.map(children, (child, i) => {
          if (i === 0) return <Front>{child}</Front>;
          if (i === 1) return <Back>{child}</Back>;
        })}
      </InnerFrame>
    </Outer>
  );
}
