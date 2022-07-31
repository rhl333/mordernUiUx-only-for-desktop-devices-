import styled from "styled-components";

export let Main = styled.div`
  background: #031b34;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  padding: 8rem 6rem;
  padding-top: 10rem;
`;

export let MainTop = styled.div`
  & h2 {
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    text-align: center;
    letter-spacing: -0.04em;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export let MainMiddle = styled.div`
  & p {
    padding: 0.5rem 2rem;
    border: 1px solid white;
    font-size: 18px;
    line-height: 21px;
    color: white;
    margin: 2rem 0;
    cursor: pointer;
  }
`;

export let MainBottom = styled.div`
  margin-top: 8rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: 2rem;
  color: white;
  & div.first {
    & img {
      width: 118px;
      height: 30px;
    }
    & p {
      font-size: 14px;
      margin-top: 1rem;
    }
  }
  & div.second,
  div.third,
  div.fourth {
    display: flex;
    flex-direction: column;
    & h2 {
      font-size: 14px;
      margin-bottom: 2rem;
    }
    & a {
      margin-bottom: 1rem;
      text-decoration: underline;
      font-size: 14px;
      color: #ff8a71;
    }
    & p {
      font-size: 14px;
      margin-bottom: 0.5rem;
    }
  }
`;
