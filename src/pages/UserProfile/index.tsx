import { Link } from "react-router-dom";
import * as S from "./style";

const UserProfile = () => {
  return (
    <S.Profile>
      <S.ProfileContent>
        <S.ProfileHeaderContent>
          <S.ProfileDetailsLogo />
        </S.ProfileHeaderContent>
        <S.ProfileBodyContent>
          <S.ProfileCardContent>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <S.ProfileIcons />
            </Link>
          </S.ProfileCardContent>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <S.ProfileBtnReturn />
          </Link>
        </S.ProfileBodyContent>
      </S.ProfileContent>
    </S.Profile>
  );
};

export default UserProfile;
