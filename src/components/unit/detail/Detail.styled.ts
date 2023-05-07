import styled from "styled-components";

export const Main = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
`;

export const List = styled.div`
  width: 100%;
  height: 85%;
  //   background-color: white;
  //   border: 1px solid black;
  border-radius: 5px;
  margin-right: 15px;
  border-radius: 20px;
  margin-left: 30px;
  padding-inline-start: 2ch;
`;

export const text = styled.li`
  color: white;
  margin-top: 20px;
  //   border: 1px solid white;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    width: 90px;
    height: 40px;
    transition: all 0.5s ease-in-out;
  }
`;
