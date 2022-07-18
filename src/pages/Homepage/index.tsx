import { CardGames } from "components/CardGames/index";
import * as S from "./style";

export const Homepage = () => {
  return (
    <S.Homepage>
      <S.HomepageHeader>
        <S.HomepageLogo />
      </S.HomepageHeader>
      <S.HomepageMainDetails>
        <S.HomepageDivColumn1>
          <S.HomepageProfileDetails>
            Aqui ficará os dados do perfil escolhido
          </S.HomepageProfileDetails>
            <S.HomepageBtnDetails />
        </S.HomepageDivColumn1>
        <S.HomepageDivColumn2>
          <S.HomepageInputSearch />
          <S.HomepageDivTextGames>
            <S.HomepageGamesAll>Todos os Jogos</S.HomepageGamesAll>
            <S.HomepageGamesFavorite>Jogos Favoritos</S.HomepageGamesFavorite>
          </S.HomepageDivTextGames>
          <S.HomepageGamesCardList>
            <CardGames />
            <CardGames />
            <CardGames />
            <CardGames />
            <CardGames />
            <CardGames />
          </S.HomepageGamesCardList>
        </S.HomepageDivColumn2>
        <S.HomepageDivColumn3></S.HomepageDivColumn3>
      </S.HomepageMainDetails>
    </S.Homepage>
  );
};
