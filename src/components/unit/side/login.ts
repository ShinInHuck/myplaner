export const login = (
  name: string,
  value: string,
  setIdErrMessage: React.Dispatch<React.SetStateAction<string>>,
  setPwErrMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (name === "changeId" && value) {
    return setIdErrMessage("");
  }
  if (name === "changeId" && !value) {
    return setIdErrMessage("id");
  }
  if (name === "changePw" && value) {
    return setPwErrMessage("");
  }
  if (name === "changePw" && !value) {
    return setPwErrMessage("pw");
  }
};
