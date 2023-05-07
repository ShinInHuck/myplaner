// import { ChangeEvent, useState } from "react";
// import * as S from "./Login.styled";
// import loginSample from "./loginSample";
// const Login = () => {
//   const [form, setForm] = useState({
//     changeId: "",
//     changePw: "",
//   });

//   const [errIdMessage, setIdErrMessage] = useState("");
//   const [errPwMessage, setPwErrMessage] = useState("");

//   const onChangeHandeler = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//     loginSample(name, value, setIdErrMessage, setPwErrMessage);
//   };
//   const onClickHandler = () => {
//     if (!form.changeId) {
//       setIdErrMessage("Id 적어");
//     }
//     if (!form.changePw) {
//       setPwErrMessage("Pw 적어");
//     }
//   };

//   return (
//     <div>
//       <S.IsInput type="text" name="changeId" onChange={onChangeHandeler} />
//       {form.changeId ? null : <div style={{ color: "red" }}>{errIdMessage}</div>}
//       <S.IsInput type="text" name="changePw" onChange={onChangeHandeler} />
//       {form.changePw ? null : <div style={{ color: "red" }}>{errPwMessage}</div>}
//       <S.IsButton onClick={onClickHandler}>버튼이다</S.IsButton>
//     </div>
//   );
// };

// export default Login;
