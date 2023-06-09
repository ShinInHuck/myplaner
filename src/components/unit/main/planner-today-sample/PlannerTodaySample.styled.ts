import styled from "styled-components";

export const Ex = styled.div`
  width: 25%;
  height: 300px;
  background-color: #9dcaef;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Title = styled.div`
  margin-top: 5%;
  margin-right: 30%;
  margin-bottom: 5%;
  margin-left: 30%;
`;

interface CssProps {
  aaa: string[];
  bbb: number;
}

export const Aaa = styled.li`
  margin-bottom: 10px;
`;

export const Ccc = styled.input``;

export const LiText = styled.span`
  text-decoration: ${(props: CssProps) => (props.aaa.includes(props.bbb.toString()) ? "line-through" : "none")};
`;
