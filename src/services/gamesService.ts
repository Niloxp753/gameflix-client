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
};
