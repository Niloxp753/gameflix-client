import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AllGames, useGame } from "services/gamesService";
import { IoSettings } from "react-icons/io5";
import Modal from "react-modal";
import * as S from "./style";
import { ModalEditGame } from "components/ModalEditGame";

export const GameDetails = () => {
  const navigate = useNavigate();
  const [gameId, setGameId] = useState<useGame>({
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
  });
  const { id } = useParams();
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      borderRadius: "16px",
      display: "Flex",
      justifyContent: "center",
      alignItems: "center",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.7)",
    },
  };

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
            <S.DivProfileDetailsGame>
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
              <S.DivAdminEditGame>
                <S.AdminEditGame>
                  <IoSettings size={75} onClick={handleOpenModal} />
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                  >
                    <ModalEditGame gameId={gameId} closeModal={handleCloseModal} />
                  </Modal>
                </S.AdminEditGame>
              </S.DivAdminEditGame>
            </S.DivProfileDetailsGame>
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
