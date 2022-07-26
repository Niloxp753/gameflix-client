import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AllGames, useGame } from "services/gamesService";
import * as S from "./style";

export const GameDetails = () => {
  const navigate = useNavigate();
  const [gameId, setGameId] = useState<useGame>();
  const { id } = useParams();

  useEffect(() => {
    gameById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gameById = async () => {
    if (id) {
      const res = await AllGames.GameById(id);
      console.log(res?.data);
      setGameId(res?.data);
    }
  };

  return (
    <S.Container>
      <S.BgImageGame
        style={{
          background: `url(${gameId?.coverImageUrl}) no-repeat`,
          width: "100vw",
          height: "100vh",
          backgroundBlendMode: "darken",
        }}
      >
        <S.HeaderGame>
          <S.Logo />
        </S.HeaderGame>
        <S.MainGame>
          <S.DivColumn1Game>
            <S.ProfileDetailsGame>
              <S.ProfileIconGame
                onClick={() => navigate("/profiles")}
                src={gameId?.coverImageUrl}
              />
              <S.ProfileContainerGame>
                <div>Jogo: {gameId?.title}</div>
                <div>
                  Gênero:{" "}
                  {gameId?.genre.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </div>
                <div>Ano do jogo: {gameId?.year}</div>
              </S.ProfileContainerGame>
            </S.ProfileDetailsGame>
          </S.DivColumn1Game>
          <S.DivColumn2Game>
            <S.DivTrailerGame
              width="500"
              src={gameId?.trailerYoutubeUrl}
            ></S.DivTrailerGame>
            <S.DivGameplayGame
              width="500"
              src={gameId?.gameplayYoutubeUrl}
            ></S.DivGameplayGame>
          </S.DivColumn2Game>
          <S.DivColumn3Game>
            <S.DescriptionDetailsGame>
              {gameId?.description}
            </S.DescriptionDetailsGame>
          </S.DivColumn3Game>
        </S.MainGame>
      </S.BgImageGame>
    </S.Container>
  );
};
