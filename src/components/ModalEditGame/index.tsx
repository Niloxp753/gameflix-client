import { useState } from "react";
import { useParams } from "react-router-dom";
import { AllGames, useGame } from "services/gamesService";
import swal from "sweetalert";
import * as S from "./style";

interface Prop {
  closeModal: () => void;
  gameId: useGame;
}

export const ModalEditGame = ({ closeModal, gameId }: Prop) => {
  const { id } = useParams();
  const [values, setValues] = useState<useGame>(gameId);

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "year" || event.target.name === "imdbScore") {
      setValues((values: useGame) => ({
        ...values,
        [event.target.name]: parseInt(event.target.value),
      }));
    } else {
      setValues((values: useGame) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmitEditedGame = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (id) {
      const response = await AllGames.EditGame(id, values);
      console.log(response?.data);
      debugger

      if (response?.data) {
        swal({
          title: "Perfil criado com sucesso",
          icon: "success",
          timer: 1000,
        });
        closeModal();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  return (
    <S.Container>
      <S.DivTextEditGame>
        <S.TextEditGame>EDITAR JOGO ATUAL</S.TextEditGame>
      </S.DivTextEditGame>
      <S.FormModal onSubmit={handleSubmitEditedGame}>
        <S.InputTitle
          defaultValue={gameId?.title}
          onChange={handleChangeValues}
          id="title"
          name="title"
          type="text"
        />
        <S.InputImage
          defaultValue={gameId?.coverImageUrl}
          onChange={handleChangeValues}
          id="coverImageUrl"
          name="coverImageUrl"
          type="text"
        />
        <S.InputYear
          defaultValue={gameId?.year}
          onChange={handleChangeValues}
          id="year"
          name="year"
          type="number"
        />
        <S.InputScore
          defaultValue={gameId?.imdbScore}
          onChange={handleChangeValues}
          id="imdbScore"
          name="imdbScore"
          type="number"
        />
        <S.InputTrailer
          defaultValue={gameId?.trailerYoutubeUrl}
          onChange={handleChangeValues}
          id="trailerYoutubeUrl"
          name="trailerYoutubeUrl"
          type="text"
        />
        <S.InputGameplay
          defaultValue={gameId?.gameplayYoutubeUrl}
          onChange={handleChangeValues}
          id="gameplayYoutubeUrl"
          name="gameplayYoutubeUrl"
          type="text"
        />
        <S.InputDescription
          defaultValue={gameId?.description}
          onChange={handleChangeValues}
          id="description"
          name="description"
          type="text"
        />
        <S.InputGenre
          defaultValue={gameId?.genre.map((genre) => genre.name).join(",")}
          onChange={handleChangeValues}
          id="genre"
          name="genre"
          type="text"
        />
        <S.BtnModal type="submit">ATUALIZAR</S.BtnModal>
      </S.FormModal>
    </S.Container>
  );
};
