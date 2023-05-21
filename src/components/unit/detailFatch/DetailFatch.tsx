import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import * as S from "./DetailFatch.styled";

interface IMock {
  id: number;
  content: string;
}

interface INewContentType {
  id?: number;
  content: string;
}

const PlannerTodayDetailFatch = () => {
  const [feed, setFeed] = useState<IMock[]>([]);
  const [newContent, setNewContent] = useState<INewContentType[]>([]);

  const param = useParams();
  console.log(param.id);

  const newContentHandler = () => {
    setNewContent(prev => [...prev, { content: "" }]);
  };

  // const contentChangeHandler = () => {};

  const confirmHandler = async () => {
    try {
      console.log("나는 등록하기 버튼이얌");
      await axios.post("http://10.10.10.10:3000/end", {
        data: newContent,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const modifymHandler = async () => {
    try {
      console.log("나는 수정하기 버튼이얌");
      await axios.post("http://10.10.10.10:3000/end", {
        data: newContent,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    axios.get("/data/mock.json").then(res => {
      const { data } = res;
      if (data) {
        setFeed(data);
      }
    });
  }, []);

  return (
    <S.Main>
      <S.Title>PlannerTodaySample</S.Title>
      {feed?.map(el => (
        <input type="text" defaultValue={el.content} key={uuidV4()} />
      ))}
      {newContent.map(el => (
        <input type="text" key={uuidV4()} />
      ))}
      <S.Footer>
        <S.Button onClick={newContentHandler}>+</S.Button>
        {Number(param?.id) === 0 ? (
          <button style={{ color: "white" }} onClick={confirmHandler}>
            등록하기
          </button>
        ) : (
          <button style={{ color: "white" }} onClick={modifymHandler}>
            수정하기
          </button>
        )}
      </S.Footer>
    </S.Main>
  );
};

export default PlannerTodayDetailFatch;
