import styled from "styled-components";
import PlannerTodayComplete from "../planner-today-complete/PlannerTodayComplete";
import PlannerTodayGraph from "../planner-today-graph/PlannerTodayGraph";
import PlannerTodaySample from "../planner-today-sample/PlannerTodaySample";
import PlannerMonthGraph from "../planner-month-graph/PlannerMonthGraph";

const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Box2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const MainContain = () => {
  return (
    <Contain>
      <Box>
        <PlannerTodaySample />
        <PlannerTodayGraph />
        <PlannerTodayComplete />
      </Box>
      <Box2>
        <PlannerMonthGraph />
      </Box2>
    </Contain>
  );
};

export default MainContain;
