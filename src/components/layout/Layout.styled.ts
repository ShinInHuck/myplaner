import styled from "styled-components";
// styled components 브라우저 css 초기화

export const Contain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Side = styled.aside`
  width: 15%;
  height: 100%;
  background-color: skyblue;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 15px;
`;

export const Box = styled.div`
  width: 85%;
  border: 1px solid black;
`;

export const Header = styled.header`
  height: 15%;
  background-color: blue;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

export const Navigation = styled.nav`
  height: 10%;
  background-color: pink;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

export const Main = styled.main`
  display: flex;
  position: relative;
  overflow: scroll;
  height: 83%;
  border-radius: 5px;
  background-color: yellow;
  border: 1px solid black;
`;