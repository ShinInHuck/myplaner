import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./PlannerTodaySample.styled";

interface IMock {
  id: number;
  content: string;
}

const PlannerTodaySample = () => {
  const [box, setBox] = useState<string[]>([]);
  const nav = useNavigate();
  console.log(box);

  const [feed, setFeed] = useState<IMock[]>();

  const detailPageMoveHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    nav("/detail");
  };

  const boxContainerHandler = async (checked: boolean, id: string) => {
    try {
      if (checked) {
        setBox(prev => [...prev, id]);
        await axios.post("http://localhost:3000/push", {
          id,
        });
      } else {
        setBox(box.filter(el => el !== id));
        await axios.post("http://localhost:3000/delete", {
          id,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  // const allCheckHandler = async (checked: boolean) => {
  //   try {
  //     if (checked) {
  //       const temp: string[] = [];
  //       feed?.forEach(v => temp.push(v.id.toString()));
  //       setBox(temp);
  //       await axios.post("http://localhost:3000/all", {
  //         id: temp,
  //       });
  //     } else {
  //       setBox([]);
  //       await axios.post("http://localhost:3000/all_delete", {
  //         id: [],
  //       });
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log(error.message);
  //     }
  //   }
  // };

  useEffect(() => {
    axios.get("/data/mock.json").then(res => {
      const { data } = res;
      setFeed(data);
    });
  }, []);

  const checkboxClickHandler = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <S.Ex onClick={detailPageMoveHandler}>
      {/* <input type="checkbox" onChange={event => allCheckHandler(event.currentTarget.checked)} /> */}
      <ul>
        {feed?.map(el => (
          <S.Aaa key={el.id}>
            <S.Ccc
              id={el.id.toString()}
              type="checkbox"
              onClick={checkboxClickHandler}
              onChange={event => boxContainerHandler(event.currentTarget.checked, event.currentTarget.id)}
              checked={box.includes(el.id.toString()) ? true : false}
            />
            <S.LiText aaa={box} bbb={el.id}>
              {el.content}
            </S.LiText>
          </S.Aaa>
        ))}
      </ul>
    </S.Ex>
  );
};

export default PlannerTodaySample;
