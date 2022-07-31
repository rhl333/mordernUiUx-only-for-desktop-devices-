import React from "react";
import { Main, MainLeft, MainRight } from "./style";

const CTA = () => {
  return (
    <div>
      <Main>
        <MainLeft>
          <p>Request Early Access to Get Started</p>
          <h2>Register today & start exploring the endless possiblities.</h2>
        </MainLeft>

        <MainRight>
          <button>Get Started</button>
        </MainRight>
      </Main>
    </div>
  );
};

export default CTA;
