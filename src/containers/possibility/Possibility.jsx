import React from "react";
import { Main, MainLeft, MainRight } from "./style";
import image from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div>
      <Main>
        <MainLeft>
          <img src={image} alt="" />
        </MainLeft>
        <MainRight>
          <p>Request Early Access to Get Started</p>
          <h2>The possibilities are beyond your imagination</h2>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration
            boisterous the attachment. Party we years to order allow asked of.
          </p>
          <p>Request Early Access to Get Started</p>
        </MainRight>
      </Main>
    </div>
  );
};

export default Possibility;
