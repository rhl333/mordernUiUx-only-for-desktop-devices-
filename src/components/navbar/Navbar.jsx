import React from "react";
import logo from "../../assets/logo.svg";
import "./style";
import { Main, MainLeft, MainRight } from "./style";

const Navbar = () => {
  return (
    <div>
      <Main>
        <MainLeft>
          <a href="/">
            <img src={logo} alt="" />{" "}
          </a>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">What is GPT?</a>
            </li>
            <li>
              <a href="/">Open AI</a>
            </li>
            <li>
              <a href="/">Case Studies</a>
            </li>
            <li>
              <a href="/">Library</a>
            </li>
          </ul>
        </MainLeft>
        <MainRight>
          <a href="/" alt="">
            Sign In
          </a>
          <button>Sign Up</button>
        </MainRight>
      </Main>
    </div>
  );
};

export default Navbar;
