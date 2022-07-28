import { Link } from "react-router-dom";
import * as S from "./style";

export const GenreGames = () => {
  return (
    <S.Container>
      <S.HeaderGenreGame>
        <S.Logo />
      </S.HeaderGenreGame>
      <S.MainGenreGame>
        <S.MainDivGenre>
          <S.ModalCreateGenre>
            <S.ModalHeaderCreateGenre>
              <S.ModalTextCreateGenre>
                Cadastrar um novo Gênero
              </S.ModalTextCreateGenre>
            </S.ModalHeaderCreateGenre>
            <S.ModalFormCreateGenre>
              <S.ModalDivInputCreateGenre />
              <S.ModalDivBtnCreateGenre>
                <S.ModalBtnCreateGenre>CADASTRAR</S.ModalBtnCreateGenre>
              </S.ModalDivBtnCreateGenre>
            </S.ModalFormCreateGenre>
          </S.ModalCreateGenre>
          <S.ModalEditGenre>
            <S.ModalHeaderEditGenre>
              <S.ModalTextEditGenre>Editar um Gênero</S.ModalTextEditGenre>
              <S.ModalFormEditGenre>
                <S.ModalDivInputEditGenre type="select" />
                <S.ModalDivBtnEditGenre>
                  <S.ModalBtnEditGenre>ATUALIZAR</S.ModalBtnEditGenre>
                </S.ModalDivBtnEditGenre>
              </S.ModalFormEditGenre>
            </S.ModalHeaderEditGenre>
          </S.ModalEditGenre>
          <Link to={'/profiles/homepage'} style={{ textDecoration: "none" }}>
            <S.BtnReturn />
          </Link>
        </S.MainDivGenre>
        <S.MainDivGame>
          <S.ModalCreateGame>
            <S.ModalHeaderCreateGame>
              <S.ModalTextCreateGame>
                Cadastrar um novo Jogo
              </S.ModalTextCreateGame>
            </S.ModalHeaderCreateGame>
            <S.ModalFormCreateGame>
              <S.InputTitle />
              <S.InputImage />
              <S.InputYear />
              <S.InputScore />
              <S.InputTrailer />
              <S.InputGameplay />
              <S.InputDescription />
              <S.InputGenre />
              <S.ModalDivBtnCreateGame>
                <S.ModalBtnCreateGame>CADASTRAR</S.ModalBtnCreateGame>
              </S.ModalDivBtnCreateGame>
            </S.ModalFormCreateGame>
          </S.ModalCreateGame>
        </S.MainDivGame>
      </S.MainGenreGame>
    </S.Container>
  );
};
