import { Link } from "react-router-dom";
import * as S from "./style";

const Home = () => {
  return (
    <S.Home>
      <S.HomeHeader>
        <S.HomeHeaderDetails>
          <div>
            <S.HomeHeaderDetailsLogo />
          </div>
          <div>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <S.HomeBtnDetailsRegister>Login</S.HomeBtnDetailsRegister>
            </Link>
          </div>
        </S.HomeHeaderDetails>
      </S.HomeHeader>
      <S.HomeContent>
        <div>
          <S.HomeTitleH1>
            Gameplays, trailers e muito mais. Sem limites.
          </S.HomeTitleH1>
          <S.HomeTitleH2>Assista onde quiser. Quando quiser.</S.HomeTitleH2>
          <S.HomeTitleH3>
            pronto para assistir? informe seu email e clique em avançar para
            criar um usuário.
          </S.HomeTitleH3>
        </div>
        <S.HomeDivDetailsRegister>
          <S.HomeDetailsRegister placeholder="       Email" type={"text"}/>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <S.HomeBtnDetailsRegister>Avançar</S.HomeBtnDetailsRegister>
          </Link>
        </S.HomeDivDetailsRegister>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
