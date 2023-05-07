import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { login } from "./login";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90%;
`;

const IsInput = styled.input`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &:focus {
    width: 130px;
    height: 50px;
    transition: all 0.5s ease-in-out;
  }
`;

const IsButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    width: 110px;
    height: 50px;
    background-color: black;
    font-size: 20px;
    color: white;
    transition: all 0.5s ease-in-out;
  }
`;

function Side() {
  //   const [changeId, setChangeId] = useState("");
  //   const [changePw, setChangePw] = useState("");
  const [form, setForm] = useState({
    changeId: "",
    changePw: "",
  });

  const [errIdMessage, setIdErrMessage] = useState("");
  const [errPwMessage, setPwErrMessage] = useState("");

  const onChangeHandeler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    login(name, value, setIdErrMessage, setPwErrMessage);
  };

  //   const idOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //     setChangeId(e.target.value);
  //     if (e.target.value) {
  //       setIdErrMessage("");
  //     }
  //     if (!e.target.value) {
  //       setIdErrMessage("Id 적어");
  //     }
  //   };
  //   const pwOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //     setChangePw(e.target.value);
  //     if (e.target.value) {
  //       setPwErrMessage("");
  //     }
  //   };

  const onClickHandler = () => {
    if (!form.changeId) {
      setIdErrMessage("Id 적어");
    }
    if (!form.changePw) {
      setPwErrMessage("Pw 적어");
    }
  };

  return (
    <div>
      <Container>
        <IsInput type="text" name="changeId" onChange={onChangeHandeler} />
        {form.changeId ? null : <div style={{ color: "red", padding: "3px" }}>{errIdMessage}</div>}
        <IsInput type="text" name="changePw" onChange={onChangeHandeler} />
        {form.changePw ? null : <div style={{ color: "red", padding: "3px" }}>{errPwMessage}</div>}
        <IsButton onClick={onClickHandler}>버튼이다</IsButton>
      </Container>
    </div>
  );
}

export default Side;
