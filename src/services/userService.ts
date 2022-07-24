import api from "./api";
import swal from "sweetalert";

export interface useUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  cpf: string;
  isAdmin?: boolean;
}

export const UserService = {
  GetAllUsers: async () => {
    try {
      const res = await api.get("/user");
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },

  GetUserById: async (id: string) => {
    try {
      const res = await api.get(`/user/${id}`);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },

  UpdatedUser: async (id: string, user: useUser) => {
    try {
      const res = await api.patch(`/user/${id}`, user);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },

  DeleteUser: async (id: string) => {
    try {
      const res = await api.delete(`/user/${id}`);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};
