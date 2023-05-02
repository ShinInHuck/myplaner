import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { login } from "./login";

const IsInput = styled.input`
  width: 150px;
  height: 50px;
  transition: all 0.5s ease-in-out;

  &:focus {
    width: 200px;
    height: 80px;
    transition: all 0.5s ease-in-out;
  }
`;

const IsButton = styled.button`
  width: 150px;
  height: 80px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    width: 200px;
    height: 100px;
    background-color: black;
    font-size: 20px;
    color: white;
    transition: all 0.5s ease-in-out;
  }
`;

function Side() {
  // const [changeId, setChangeId] = useState("");
  // const [changePw, setChangePw] = useState("");
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

  // const idOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setChangeId(e.target.value);
  //   if (e.target.value) {
  //     setIdErrMessage("");
  //   }
  //   if (!e.target.value) {
  //     setIdErrMessage("Id 적어");
  //   }
  // }
  // const pwOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setChangePw(e.target.value);
  //   if (e.target.value) {
  //     setPwErrMessage("");
  //   }
  // }

  const onClickHandler = () => {
    if (!form.changeId) {
      setIdErrMessage("Id 적어");
    }
    if (!form.changePw) {
      setPwErrMessage("Pw 적어");
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <IsInput type="text" name="changeId" onChange={onChangeHandeler} />
      {form.changeId ? null : <div style={{ color: "red" }}>{errIdMessage}</div>}
      <IsInput type="text" name="changePw" onChange={onChangeHandeler} />
      {form.changePw ? null : <div style={{ color: "red" }}>{errPwMessage}</div>}
      <IsButton onClick={onClickHandler}>버튼이다</IsButton>
    </div>
  );
}

export default Side;
