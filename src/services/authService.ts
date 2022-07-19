import api from "./api";
import swal from 'sweetalert';

export interface userLoginObj {
  email: string;
  password: string;
}

export interface useRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  cpf: string;
  isAdmin?: boolean;
}

export const loginService = {
  login: (values: userLoginObj) =>
    api
      .post("/auth", values)
      .then((response: any) => response)
      .catch((error: any) => console.log("Erro na chamada", error)),
};

export const registerService = {
  registerValues: (values: useRegister) =>
    api
      .post("/user/create", values)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

export const userLoggedService = {
  userLogged: () =>
    api
      .get("/user/findById")
      .then((response: any) => response)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Erro!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        });
      }),
};
