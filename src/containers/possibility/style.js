import styled from "styled-components";

export let Main = styled.div`
  margin: 0 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 4rem;
`;

export let MainLeft = styled.div`
  & img {
    width: 474px;
    height: 542px;
  }
`;

export let MainRight = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  & p:nth-child(1) {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #71e5ff;
  }
  & h2 {
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%), #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  & h2 + p {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #81afdd;
  }
  & p:last-child {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #ff8a71;
    margin-top: 1rem;
  }
`;
