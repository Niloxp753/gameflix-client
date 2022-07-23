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
      console.log(profiles);
    };

    fetchProfiles();
  }, [profiles]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  // const handleEditProfile = async (id: string) => {
  //   const GetByIdProfile = await AllProfiles.ProfileGetById(id);
  //   navigate(`/profiles/edit/${id}`);
  // };

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
                <S.ProfileCardContent
                  src={profile.imageURL}
                  onClick={() => navigate(`/profile/homepage/${profile.id}`)}
                  alt="Avatar do usuário"
                ></S.ProfileCardContent>
                {profile.title}
              </S.ProfileDivCardContent>
            ))}
            <S.ProfileCardContentCreate>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <S.ProfileIcons />
              </Link>
            </S.ProfileCardContentCreate>
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
