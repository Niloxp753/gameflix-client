import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AllProfiles, useProfile } from "services/profileService";
import * as S from "./style";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState<useProfile[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProfiles = async () => {
      const payload: any = await AllProfiles.ProfilesUser();
      console.log(payload.data);
      setProfiles(payload.data);
      console.log(profiles);
    };
    
    getId()
    fetchProfiles();
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
                <S.ProfileCardContent
                  src={profile.imageURL}
                  onClick={() => navigate(`/profile/homepage/${profile.id}`)}
                  alt="Avatar do usuário"
                ></S.ProfileCardContent>
                <S.ProfileTitle>{profile.title}</S.ProfileTitle>
                <S.ProfileCardCEdit>
                  <FaUserEdit onClick={()=>navigate(`/profiles/${profile.id}`)}/>
                </S.ProfileCardCEdit>
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
