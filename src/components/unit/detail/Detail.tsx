import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import * as S from "./Detail.styled";

interface IMock {
  id: number;
  content: string;
}
const PlannerTodayDetail = () => {
  //   useEffect(() => {
  //     axios.get(`fes:3000/${params}`).then(res => {
  //       const { data } = res;
  //       setAaa(data);
  //     });
  //   }, []);

  const [feed, setFeed] = useState<IMock[]>();
  const nav = useNavigate();

  const fatchPageMoveHandler = () => {
    nav("/detail/write/1");
  };

  useEffect(() => {
    axios.get("/data/mock.json").then(res => {
      const { data } = res;
      setFeed(data);
    });
  }, []);

  return (
    <S.Main>
      <S.Title>PlannerTodaySample</S.Title>
      <S.List>
        {feed?.map(el => (
          <S.text key={uuidV4()}>{el.content}</S.text>
        ))}
      </S.List>
      <S.Footer>
        <S.Button onClick={fatchPageMoveHandler}>수정</S.Button>
      </S.Footer>
    </S.Main>
  );
};
export default PlannerTodayDetail;

// const MOCK_DATA = {
//   title_id: 1,
//   title: "title",
//   contents: [
//     {
//       id: 1,
//       contents: "밥먹기",
//       time: "11:00 ~ 12:00",
//     },
//     {
//       id: 2,
//       contents: "밥먹기",
//       time: "11:00 ~ 12:00",
//     },
//     {
//       id: 3,
//       contents: "밥먹기",
//       time: "11:00 ~ 12:00",
//     },
//     {
//       id: 4,
//       contents: "밥먹기",
//       time: "11:00 ~ 12:00",
//     },
//   ],
// };
