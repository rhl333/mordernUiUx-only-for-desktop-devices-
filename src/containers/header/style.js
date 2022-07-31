import styled from "styled-components";

export let Main = styled.div`
  display: flex;
  margin: 0 6rem;
  align-items: center;
  /* width: 100%; */
`;

export let MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  & h2 {
    font-weight: 800;
    font-size: 58px;
    line-height: 75px;
    letter-spacing: -0.04em;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  & p.first {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #81afdd;
  }
  & div.inp {
    display: flex;
    align-items: center;
    & input {
      width: 405px;
      height: 73px;
      background: #052d56;
      border-radius: 5px 0px 0px 5px;
      border: none;
      outline: none;
      color: white;
      font-size: 20px;
      padding: 1rem;
    }
    & button {
      width: 174px;
      height: 73px;
      border: none;
      outline: none;
      background: #ff4820;
      border-radius: 0px 5px 5px 0px;
      font-size: 20px;
      font-weight: 700;
      color: white;
      cursor: pointer;
    }
  }
  & div.people {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
    & p {
      font-size: 12px;
      color: white;
      font-weight: 500;
    }
  }
`;

export let MainRight = styled.div`
  width: 50%;
  & img {
    width: 664.41px;
    height: 701.59px;
  }
`;
