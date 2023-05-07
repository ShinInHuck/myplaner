import styled from "styled-components";

const Ex = styled.div`
  width: 95%;
  height: 300px;
  background-color: #5966ac;
  border: 1px solid black;
  border-radius: 20px;
`;

const PlannerMonthGraph = () => {
  return (
    <Ex>
      <div style={{ color: "white" }}>달 그래프</div>
    </Ex>
  );
};

export default PlannerMonthGraph;
