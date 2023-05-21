import * as S from "./Header.styled";
const Header = () => {
  return (
    <S.Main>
      <div>
        <img alt="home" src="image/home2.png" width={"60px"} height={"60px"}></img>
      </div>
      <div>
        <img alt="todayTodo" src="image/todayTodo.png" width={"60px"} height={"60px"}></img>
      </div>
      <div>
        <img alt="monthTodo" src="image/monthTodo.png" width={"60px"} height={"60px"}></img>
      </div>
      <div>
        <img alt="chart" src="image/chart.png" width={"60px"} height={"60px"}></img>
      </div>
    </S.Main>
  );
};

export default Header;
