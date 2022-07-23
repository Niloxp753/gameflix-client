import api from "./api";
import swal from "sweetalert";

export interface useGameGenre {
    genre: string;
    title: string[];
}

export interface useGame {
    id: string;
    title: string;
    coverImageUrl: string;
    description: string;
    year: number;
    imdbScore: number;
    trailerYoutubeUrl: string;
    gameplayYoutubeUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface useGameFavorite {
    games: useGame[];
}

export interface useHomepage {
    games: useGameGenre[];
    favorite: useGameFavorite;
}

export const HomepageProfile = {
  HomepageProfileById: async (id: string) => {
    try {
      const res  = await api.get(`/homepage/${id}`);
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
