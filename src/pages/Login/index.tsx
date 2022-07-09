import * as S from "./style";

const Login = () => {
    return(
        <S.Login>
            <S.LoginContent>
                <S.LoginHeaderForm />
                    <S.LoginBodyForm>
                        <S.LoginContentFormInput>
                            <S.LoginTitleH1>
                                Bem vindo(a) de volta!
                            </S.LoginTitleH1>
                            <S.LoginTitleH2>
                                Acesse sua conta agora mesmo:
                            </S.LoginTitleH2>
                        </S.LoginContentFormInput>
                    </S.LoginBodyForm>
            </S.LoginContent>
        </S.Login>
    );
};

export default Login;