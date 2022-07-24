import { CardGames } from "components/CardGames/index";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AllProfiles, useProfile } from "services/profileService";
import * as S from "./style";

export const Homepage = () => {
  const [profile, setProfile] = useState<useProfile>({
    title: "",
    imageURL: "",
    user: {
      name: "",
      email: "",
    },
    _count: {
      games: 0,
    },
  });

  const navigate = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    const fetchProfiles = async () => {
      if (id) {
        const payload: any = await AllProfiles.ProfileGetById(id);
        console.log(payload.data);
        setProfile(payload.data);
        console.log(profile);
      }
    };

    fetchProfiles();
  }, [id, profile]);

  return (
    <S.Homepage>
      <S.HomepageHeader>
        <S.HomepageLogo />
      </S.HomepageHeader>
      <S.HomepageMainDetails>
        <S.HomepageDivColumn1>
          <S.HomepageProfileDetails>
            <S.HomepageProfileIcon onClick={()=>navigate('/profiles')}
              src={profile.imageURL}
              alt="Avatar do perfil"
            ></S.HomepageProfileIcon>
            {profile.title}
          </S.HomepageProfileDetails>
        </S.HomepageDivColumn1>
        <S.HomepageDivColumn2>
          <S.HomepageInputSearch />
          <S.HomepageDivTextGames>
            <S.HomepageGamesAll>Todos os Jogos</S.HomepageGamesAll>
            <S.HomepageGamesFavorite>Jogos Favoritos</S.HomepageGamesFavorite>
          </S.HomepageDivTextGames>
          <CardGames />
        </S.HomepageDivColumn2>
        <S.HomepageDivColumn3></S.HomepageDivColumn3>
      </S.HomepageMainDetails>
    </S.Homepage>
  );
};
