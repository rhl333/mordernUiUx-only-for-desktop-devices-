import styled from "styled-components";

export let Main = styled.div`
  margin: 8rem 6rem;
  display: flex;
  column-gap: 4rem;
`;

export let MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  flex-grow: 1.3;
  flex-basis: 0;
  & h2 {
    font-weight: 800;
    font-size: 34px;
    line-height: 55px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%), #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  & p {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #ff8a71;
  }
`;

export let MainMiddle = styled.div`
  flex-grow: 0.5;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  & hr {
    width: 38px;
    height: 3px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%), #ffffff;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.5rem;
  }
  & p {
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.04em;
    color: #ffffff;
  }
`;

export let MainRight = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  & p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #81afdd;
  }
`;
