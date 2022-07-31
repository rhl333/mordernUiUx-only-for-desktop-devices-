import styled from "styled-components";

export let Main = styled.div`
  margin: 5rem 6rem;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10.7236px;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
`;

export let MainLeft = styled.div`
  & p {
    font-weight: 500;
    font-size: 12px;
    line-height: 30px;
    color: #0e0e0e;
  }
  & h2 {
    font-weight: 800;
    font-size: 24px;
    line-height: 45px;
    color: #000000;
    text-transform: capitalize;
  }
`;

export let MainRight = styled.div`
  & button {
    width: 190px;
    height: 60px;
    background-color: black;
    color: white;
    border-radius: 40px;
    font-size: 18px;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
`;
