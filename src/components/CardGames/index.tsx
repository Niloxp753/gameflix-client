import * as S from "./style";

export const CardGames = () => {
  return (
    <S.CardGamesContent>
      <S.CardGamesDivDetailsFavorite>
        <S.CardGamesDetailsFavorite />
      </S.CardGamesDivDetailsFavorite>
      <S.CardGamesDivDetailsScore>
        <S.CardGamesDetailsScore />
        <S.CardGamesDetailsScore />
        <S.CardGamesDetailsScore />
        <S.CardGamesDetailsScore />
        <S.CardGamesDetailsScore />
      </S.CardGamesDivDetailsScore>
    </S.CardGamesContent>
  );
};
