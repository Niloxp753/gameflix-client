import api from "./api";
import swal from "sweetalert";

export interface useGame {
  id?: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  trailerYoutubeUrl: string;
  gameplayYoutubeUrl: string;
  genre: string;
}

export const AllGames = {
  GamesProfile: async () => {
    try {
      const res = await api.get("/games", { method: "GET" });
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
  
  GameById: async (id: string) => {
    try {
      const res = await api.get(`/games/${id}`);
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

  CreateGame: async (game: useGame) => {
    try {
      const res = await api.post("/games", game);
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

  EditGame: async (id: string, game: useGame) => {
    try {
      const res = await api.patch(`/games/${id}`, game);
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

  DeleteGame: async (id: string) => {
    try {
      const res = await api.delete(`/games/${id}`);
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
