import React from "react";
import { Main, MainTop, MainBottom } from "./style";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div>
      <Main>
        <MainTop>
          <h2>A lot is happening, We are blogging about it.</h2>
        </MainTop>
        <MainBottom>
          <div className="firstDiv">
            <img className="first" src={blog1} alt="" />
            <div className="lol">
              <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <p>Read Full Article</p>
            </div>
          </div>
          <div>
            <img src={blog2} alt="" />
            <div>
              <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <p>Read Full Article</p>
            </div>
          </div>
          <div>
            <img src={blog3} alt="" />
            <div>
              <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <p>Read Full Article</p>
            </div>
          </div>
          <div>
            <img src={blog4} alt="" />
            <div>
              <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <p>Read Full Article</p>
            </div>
          </div>
          <div>
            <img src={blog5} alt="" />
            <div>
              <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <p>Read Full Article</p>
            </div>
          </div>
        </MainBottom>
      </Main>
    </div>
  );
};

export default Blog;
