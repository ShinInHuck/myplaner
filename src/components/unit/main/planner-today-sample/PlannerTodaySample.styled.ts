import styled from "styled-components";

export const Ex = styled.div`
  width: 25%;
  height: 300px;
  background-color: pink;
  border: 1px solid black;
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
