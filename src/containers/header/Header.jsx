import React from "react";
import { Main, MainLeft, MainRight } from "./style";
import peoples from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div>
      <Main>
        <MainLeft>
          <h2>Let’s Build Something amazing with GPT-3 OpenAI</h2>
          <p className="first">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration
            boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className="inp">
            <input type="text" />
            <button>Get Started</button>
          </div>
          <div className="people">
            <img src={peoples} alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </MainLeft>
        <MainRight>
          <img src={ai} alt="" />
        </MainRight>
      </Main>
    </div>
  );
};

export default Header;
