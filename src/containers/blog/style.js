import styled from "styled-components";

export let Main = styled.div`
  margin: 6rem 6rem;
`;

export let MainTop = styled.div`
  width: 54%;
  & h2 {
    margin-bottom: 4rem;
    font-weight: 800;
    font-size: 62px;
    line-height: 85px;
    letter-spacing: -0.04em;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export let MainBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  & img {
    width: 327px;
    height: 130px;
    margin: 0;
  }
  & img.first {
    width: 417px;
    height: 288px;
  }
  & div.firstDiv {
    grid-row: 1/3;
  }
  & div div {
    background: #042c54;
    margin: 0;
    width: 327px;
    margin-top: -5px;
    padding: 1rem;
    color: white;
  }
  & div.lol {
    width: 417px;
  }
  & div div p {
    font-weight: 700;
    font-size: 11.649px;
    line-height: 35px;
  }
  & div div h3 {
    font-weight: 800;
    font-size: 19.3154px;
    line-height: 30px;
  }
  & div div p:last-child {
    margin-top: 1rem;
  }
`;
