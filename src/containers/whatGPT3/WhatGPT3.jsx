import React from "react";
import { Main, MainBottom, MainMiddle, MainTop } from "./style";
import "./style.css";

const WhatGPT3 = () => {
  return (
    <div>
      <Main className="what_gpt3">
        <MainTop>
          <div className="left">
            <hr />
            <h2>What is GPT-3</h2>
          </div>
          <div className="right">
            <p>
              We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to
              on by.
            </p>
          </div>
        </MainTop>

        <MainMiddle>
          <h2>The possibilities are beyond your imagination</h2>
          <p>Explore The Library</p>
        </MainMiddle>

        <MainBottom>
          <div className="left">
            <hr />
            <h2>Chatbots</h2>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
          </div>
          <div className="middle">
            <hr />
            <h2>Knowledgebase</h2>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>
          <div className="right">
            <hr />
            <h2>Education</h2>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>
        </MainBottom>
      </Main>
    </div>
  );
};

export default WhatGPT3;
