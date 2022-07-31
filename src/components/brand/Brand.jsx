import React from "react";
import { Main } from "./style";
import google from "../../assets/google.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
const Brand = () => {
  return (
    <div>
      <Main>
        <img src={google} alt="" />
        <img src={slack} alt="" />
        <img src={atlassian} alt="" />
        <img src={dropbox} alt="" />
        <img src={shopify} alt="" />
      </Main>
    </div>
  );
};

export default Brand;
