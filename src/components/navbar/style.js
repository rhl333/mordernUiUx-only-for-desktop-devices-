import styled from "styled-components";

export let Main = styled.div`
  display: flex;
  padding: 4rem 6rem;
  align-items: center;
`;

export let MainLeft = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  & ul {
    margin-left: 7rem;
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
    list-style: none;
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
  & img {
    width: 62.56px;
    height: 16.02px;
  }
  & a {
    display: flex;
    align-items: center;
  }
`;
export let MainRight = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  font-size: 18px;
  font-weight: 500;
  color: white;
  & button {
    font-size: 18px;
    font-weight: 500;
    background-color: #ff4820;
    border-radius: 5px;
    color: white;
    border: none;
    width: 152px;
    height: 58px;
    cursor: pointer;
  }
`;
