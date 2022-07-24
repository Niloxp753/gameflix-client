import api from "./api";
import swal from 'sweetalert';

export interface useProfile {
    id?: string;
    title: string;
    imageURL: string;
    userId?: string;
    user?: {
      name: string;
      email: string;
      isAdmin?: boolean;
    };
    games?: [
      {
        id: string;
        title: string;
        coverImageUrl: string;
        description: string;
        year: number;
        imbScore: number;
        trailerYoutubeUrl: string;
        gameplayYouTubeUrl: string;
      }
    ],
    _count?: {
      games: number;
    }
  }

  export const AllProfiles = {
    ProfilesUser: async () => {
      try {
        const res = await api.get("/profiles", { method: "GET" });
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
  
    CreateProfile: async (profile: useProfile) => {
      try {
        const res = await api.post("/profile", profile);
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
  
    ProfileGetById: async (id: string) => {
      try {
        const res = await api.get(`/profiles/${id}`);
        return res
      }
      catch (error: any) {
        swal({
          title: "Error",
          text: `${error.message}`,
          icon: "error",
          timer: 6000,
        });
      }
    },
  
    EditProfile: async (id: string, profile: useProfile) => {
      try {
        const res = await api.patch(`/profiles/${id}`, profile);
        return res
      }
      catch (error: any) {
        swal({
          title: "Error",
          text: `${error.message}`,
          icon: "error",
          timer: 6000,
        });
      }
    },

    DeleteProfile: async (id: string) => {
      try {
        const res = await api.patch(`/profiles/${id}`);
        return res
      }
      catch (error: any) {
        swal({
          title: "Error",
          text: `${error.message}`,
          icon: "error",
          timer: 6000,
        });
      }
    }
  }; 