import styled from "styled-components";

export let Main = styled.div`
  margin: 0 6rem;
  padding: 3rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  & hr {
    width: 38px;
    height: 3px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%), #ffffff;
  }
`;

export let MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  & div.left {
    & h2 {
      font-size: 24px;
      font-weight: 800;
      color: white;
      line-height: 75px;
    }
  }
  & div.right {
    width: 70%;
    & p {
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      color: #81afdd;
    }
  }
`;

export let MainMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h2 {
    width: 50%;
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
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
    margin-right: 2rem;
  }
`;

export let MainBottom = styled.div`
  display: flex;
  column-gap: 3.5rem;
  & h2 {
    font-weight: 800;
    font-size: 24px;
    line-height: 75px;
    color: #ffffff;
  }
  & p {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #81afdd;
    margin-top: 1.5rem;
  }
  & div.left {
  }
`;
