import * as S from "./style";

const Home = () => {
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo />
            </div>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeTitleH1>Gameplays, trailers e muito mais.</S.HomeTitleH1>
          <S.HomeTitleH2>Assista onde quiser. Quando quiser.</S.HomeTitleH2>
          <S.HomeTitleH3>
            pronto para assistir? informe seu email e clique em avançar para
            criar um usuário.
          </S.HomeTitleH3>
        </div>
        <S.HomeDivDetailsRegister>
          <S.HomeDetailsRegister placeholder="       Email" />
          <S.HomeBtnDetailsRegister>Avançar</S.HomeBtnDetailsRegister>
        </S.HomeDivDetailsRegister>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
