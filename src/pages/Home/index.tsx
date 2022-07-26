import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  const goToRegister = (e: React.SyntheticEvent) => {
    e.preventDefault()
    navigate('/register', {
      state: {
        email: email
      }
    })
  }

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
        <S.HomeDivDetailsRegister onSubmit={goToRegister}>
          <S.HomeDetailsRegister placeholder="       Email" type={"text"} onChange={(e) => setEmail(e.target.value)}/>
          <S.HomeBtnDetailsRegister type="submit">Avançar</S.HomeBtnDetailsRegister>
        </S.HomeDivDetailsRegister>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
