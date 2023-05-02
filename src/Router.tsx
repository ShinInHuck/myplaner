import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/global/global";
import MainContain from "./components/unit/main/contain/MainContain";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainContain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
