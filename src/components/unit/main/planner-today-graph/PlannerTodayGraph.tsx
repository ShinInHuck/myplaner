import styled from "styled-components";
import Chart from "./Chart";
const Ex = styled.div`
  width: 25%;
  height: 300px;
  background-color: #a0e7f0;
  border: 1px solid black;
  border-radius: 10px;
`;

const Title = styled.div`
  margin-top: 10%;
  margin-left: 38%;
`;

const PlannerTodayGraph = () => {
  return (
    <Ex>
      <div>
        <Title>TodayChart</Title>
        <Chart />
      </div>
    </Ex>
  );
};

export default PlannerTodayGraph;
