import { useState } from "react";
import { AllProfiles, useProfile } from "services/profileService";
import swal from "sweetalert";
import * as S from "./style";

interface Prop {
  closeModal: () => void;
}

export const ModalCreateProfile = ({ closeModal }: Prop) => {
  const [values, setValues] = useState<useProfile>({
    title: "",
    imageURL: "",
    gameId: "",
  });

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: any) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitRegister = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await AllProfiles.CreateProfile(values);
    console.log(response?.data);

    if (response?.data) {
      swal({
        title: "Perfil criado com sucesso",
        icon: "success",
        timer: 1000,
      });
      closeModal();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <S.Container>
      <S.DivTextProfile>
        <S.TextProfile>CRIAR UM NOVO PERFIL</S.TextProfile>
      </S.DivTextProfile>
      <S.FormModal onSubmit={handleSubmitRegister}>
        <S.InputImage
          placeholder="Insira a URL da Imagem"
          onChange={handleChangeValues}
          id="imageURL"
          name="imageURL"
          type="text"
          required
        />
        <S.InputName
          placeholder="Nome"
          onChange={handleChangeValues}
          id="title"
          name="title"
          type="text"
          required
        />
        <S.BtnModal type="submit">CRIAR</S.BtnModal>
      </S.FormModal>
    </S.Container>
  );
};
