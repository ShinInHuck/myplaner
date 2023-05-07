import axios from "axios";
import { useEffect, useState } from "react";
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

  const newContentHandler = () => {
    setNewContent(prev => [...prev, { content: "" }]);
  };

  // const contentChangeHandler = () => {};

  const confirmHandler = async () => {
    try {
      await axios.post("http://10.10.10.10:3000/end", {
        newData: newContent,
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
        <button onClick={confirmHandler}>등록하기</button>
      </S.Footer>
    </S.Main>
  );
};

export default PlannerTodayDetailFatch;
