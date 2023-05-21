import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/global/global";
import PlannerTodayDetail from "./components/unit/detail/Detail";
import PlannerTodayDetailFatch from "./components/unit/detailFatch/DetailFatch";
import MainContain from "./components/unit/main/contain/MainContain";
import PlannerTodayGraph from "./components/unit/main/planner-today-graph/PlannerTodayGraph";
// import Detail from "./components/unit/detail/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainContain />} />
        <Route path="/detail" element={<PlannerTodayDetail />} />
        <Route path="/detail/write/:id" element={<PlannerTodayDetailFatch />} />
        <Route path="/detail/Chart" element={<PlannerTodayGraph />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
