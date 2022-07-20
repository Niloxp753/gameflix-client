import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AllProfiles, useProfile } from "services/profileService";
import * as S from "./style";

const Profile = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState<useProfile[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const payload: any = await AllProfiles.ProfilesUser();
      console.log(payload.data);
      setProfiles(payload.data);
    };
    fetchProfiles();
  }, []);

  const handleEditProfile = async (id: string) => {
    const GetByIdProfile = await AllProfiles.ProfileGetById(id);
    navigate(`/profiles/edit/${id}`);
  };

  return (
    <S.Profile>
      {profiles.map((profiles) => (
        <S.ProfileContent key={profiles.id}>
          <S.ProfileHeaderContent>
            <S.ProfileDetailsLogo />
          </S.ProfileHeaderContent>
          <S.ProfileBodyContent>
            <S.ProfileBodyDivContentCards>
              <S.ProfileCardContent
                onClick={() => navigate("/profile/homepage")}
                src={profiles.imageUrl}
                alt="Avatar do usuário"
              >
              </S.ProfileCardContent>
              <S.ProfileCardContentCreate>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <S.ProfileIcons />
                </Link>
              </S.ProfileCardContentCreate>
            </S.ProfileBodyDivContentCards>
            <S.ProfileDivContentBtn>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <S.ProfileBtnLogout />
              </Link>
            </S.ProfileDivContentBtn>
          </S.ProfileBodyContent>
        </S.ProfileContent>
      ))}
    </S.Profile>
  );
};

export default Profile;
