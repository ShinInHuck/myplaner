import * as S from "./PlannerTodayComplete.styled";
import axios from "axios";
import { useEffect, useState } from "react";

interface IMock {
  id: number;
  content: string;
}

const PlannerTodayComplete = () => {
  const [feed, setFeed] = useState<IMock[]>();

  useEffect(() => {
    axios.get("/data/mock.json").then(res => {
      const { data } = res;
      setFeed(data);
    });
  }, []);

  return (
    <S.Ex>
      <h1 style={{ color: "white" }}>complete</h1>
      {feed?.map(el => (
        <S.Li key={el.id}>{el.content}</S.Li>
      ))}
    </S.Ex>
  );
};

export default PlannerTodayComplete;

// [
//   {
//     "id": 1,
//     "content": "10:00 ~ 11:00 밥먹기"
//   },
//   {
//     "id": 2,
//     "content": "10:00 ~ 11:00 먹기"
//   },
//   {
//     "id": 3,
//     "content": "10:00 ~ 11:00 기"
//   }
// ]
