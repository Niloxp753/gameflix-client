import { useEffect, useState } from "react";
import { AllGames, useGame } from "services/gamesService";
import ReactStars from "react-stars";
import * as S from "./style";

export const CardGames = () => {
  const [games, setGames] = useState<useGame[]>([
    {
      id: "",
      title: "",
      coverImageUrl: "",
      description: "",
      year: 0,
      imdbScore: 0,
      trailerYoutubeUrl: "",
      gameplayYoutubeUrl: "",
      genre: "",
    },
  ]);

  useEffect(() => {
    renderGames();
  }, []);

  const renderGames = async () => {
    const res = await AllGames.GamesProfile();
    setGames(res?.data);
  };

  return (
    <S.CardGamesContent>
      <S.CardGamesDivDetailsScore>
        {games.map((game) => (
          <S.CardGamesDivContent>
            <S.CardGamesImgBg src={game.coverImageUrl} />
            <ReactStars 
             count={5}
             value={game.imdbScore}
             edit={false}
             size={35}
             color1={'#1e1e1e85'}
             color2={'#1d1c1c'} />
          </S.CardGamesDivContent>
        ))}
      </S.CardGamesDivDetailsScore>
    </S.CardGamesContent>
  );
};
