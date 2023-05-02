import Side from "../unit/side/Side";
import * as S from "./Layout.styled";

interface ILayoutPropsType {
  children: JSX.Element;
}

const Layout = (props: ILayoutPropsType) => {
  return (
    <S.Contain>
      <S.Side>
        <Side />
      </S.Side>
      <S.Box>
        <S.Header>header</S.Header>
        {/* <S.Navigation>navigation</S.Navigation> */}
        <S.Main>{props.children}</S.Main>
      </S.Box>
    </S.Contain>
  );
};

export default Layout;
