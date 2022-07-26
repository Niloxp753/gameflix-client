import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";
import { AllGames, useGame } from "services/gamesService";
import * as S from "./style";
import { FaHeart } from "react-icons/fa";

export const CardGames = ({idProfile}:any) => {
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
      genre: [
        {
          id: "",
          name: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    renderGames();
  }, []);

  const renderGames = async () => {
    const res = await AllGames.GamesProfile();
    setGames(res?.data);
  };

  const setFavorite = async (id:any) => {
    const favorite = {
      gameId: id,
      profileId: idProfile
    }

    const res = await AllGames.setFavorite(favorite);
    console.log(res?.data)
  }

  const navigate = useNavigate();
  localStorage.getItem("userId");

  console.log(idProfile)
  return (
    <S.CardGamesContent>
      <S.CardGamesDivDetailsScore>
        {games.map((game) => (
          <S.CardGamesDivContent>
            <S.HeartStyle onClick={() => setFavorite(game.id)}>
              <FaHeart />
            </S.HeartStyle>
            <S.CardGamesImgBg
              src={game.coverImageUrl}
              onClick={() => navigate(`/games/${game.id}`)}
            />
            <ReactStars
              count={5}
              value={game.imdbScore}
              edit={false}
              size={35}
              color1={"#00000070"}
              color2={"#6930C3"}
            />
          </S.CardGamesDivContent>
        ))}
      </S.CardGamesDivDetailsScore>
    </S.CardGamesContent>
  );
};
