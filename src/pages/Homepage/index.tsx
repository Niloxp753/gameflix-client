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

  const navigate = useNavigate();
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
  }, []);

  

  return (
    <S.Homepage>
      <S.HomepageHeader>
        <S.HomepageLogo />
      </S.HomepageHeader>
      <S.HomepageMainDetails>
        <S.HomepageDivColumn1>
          <S.HomepageProfileDetails>
            <S.HomepageProfileIcon
              onClick={() => navigate("/profiles")}
              src={profile.imageURL}
              alt="Avatar do perfil"
            ></S.HomepageProfileIcon>
            <S.HomepageProfileContainer>
              <div>Usuário: {profile.user?.name}</div>
              <div>Perfil: {profile.title}</div>
              <div>Jogos Favoritos: {profile._count?.games}</div>
            </S.HomepageProfileContainer>
          </S.HomepageProfileDetails>
        </S.HomepageDivColumn1>
        <S.HomepageDivColumn2>
          <S.HomepageInputSearch placeholder='      Pesquise por jogos' />
          <S.HomepageDivTextGames>
            <S.HomepageGamesAll>Todos os Jogos</S.HomepageGamesAll>
            <S.HomepageGamesFavorite>Jogos Favoritos</S.HomepageGamesFavorite>
          </S.HomepageDivTextGames>
          <CardGames idProfile={id}/>
        </S.HomepageDivColumn2>
        <S.HomepageDivColumn3></S.HomepageDivColumn3>
      </S.HomepageMainDetails>
    </S.Homepage>
  );
};
