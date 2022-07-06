import * as S from "./style";

const Home = () => {
    return(
        <S.Home>
            <S.HomeContent>
            <header>
                <S.HomeHeaderDetails>
                    <div>
                        <S.HomeHeaderDetailsLogo />
                    </div>
                </S.HomeHeaderDetails>
            </header>
            <S.HomeDivDetailsRegister>
                <S.HomeDetailsRegister placeholder="       Email"/><S.HomeBtnDetailsRegister>Avançar</S.HomeBtnDetailsRegister>
            </S.HomeDivDetailsRegister>    
            </S.HomeContent>
        </S.Home>
    );
}

export default Home;