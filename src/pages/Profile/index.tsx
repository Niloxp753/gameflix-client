import { ModalCreateProfile } from "components/Modal";
import { useEffect, useState } from "react";
import { AiOutlineUserDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { AllProfiles, useProfile } from "services/profileService";
import * as S from "./style";

const Profile = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState<useProfile[]>([]);
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
      padding: '0',
      borderRadius: '16px',
      display: 'Flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.7)',
    }
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      const payload: any = await AllProfiles.ProfilesUser();
      console.log(payload.data);
      setProfiles(payload.data);
      console.log(profiles);
    };

    getId();
    fetchProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getId = async () => {
    if (id) {
      const res: any = await AllProfiles.ProfileGetById(id);
      setProfiles(res);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <S.Profile>
      <S.ProfileContent>
        <S.ProfileHeaderContent>
          <S.ProfileDetailsLogo />
        </S.ProfileHeaderContent>
        <S.ProfileBodyContent>
          <S.ProfileBodyDivContentCards>
            {profiles.map((profile) => (
              <S.ProfileDivCardContent key={profile.id}>
                <S.ProfileCardCEdit>
                  <FaUserEdit
                    onClick={() => navigate(`/profiles/${profile.id}`)}
                  />
                  <AiOutlineUserDelete
                    onClick={() => navigate(`/profiles/${profile.id}`)}
                  />
                </S.ProfileCardCEdit>
                <S.ProfileCardContent
                  src={profile.imageURL}
                  onClick={() => navigate(`/profile/homepage/${profile.id}`)}
                  alt="Avatar do usuário"
                ></S.ProfileCardContent>
                <S.ProfileTitle>{profile.title}</S.ProfileTitle>
              </S.ProfileDivCardContent>
            ))}
            <S.ProfileCardDivContentCreate>
              <S.ProfileCardContentCreate>
                <S.ProfileIcons onClick={handleOpenModal} />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={handleCloseModal}
                  style={customStyles}
                >
                  <ModalCreateProfile />
                </Modal>
              </S.ProfileCardContentCreate>
            </S.ProfileCardDivContentCreate>
          </S.ProfileBodyDivContentCards>
          <S.ProfileDivContentBtn>
            <S.ProfileBtnLogout onClick={logout} />
          </S.ProfileDivContentBtn>
        </S.ProfileBodyContent>
      </S.ProfileContent>
    </S.Profile>
  );
};

export default Profile;
