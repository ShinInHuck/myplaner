import styled from "styled-components";
import Chart from "./Chart";
const Ex = styled.div`
  width: 25%;
  height: 300px;
  background-color: #a0e7f0;
  border: 1px solid black;
  border-radius: 10px;
`;

const PlannerTodayGraph = () => {
  return (
    <Ex>
      <div>
        <Chart />
      </div>
    </Ex>
  );
};

export default PlannerTodayGraph;
