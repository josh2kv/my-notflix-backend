export const API_PREFIX = "/api" as const;
export const API_VERSION = "/v1" as const;

export const ROUTE_SEGMENT = {
  ROOT: "/",
  ID_PARAM: "/:id",
  EMAIL_PARAM: "/:email",
  TMDB_API_KEY_PARAM: "/:tmdbApiKey",

  AUTH: {
    ROOT: "/auth",
    LOGIN: "/login",
    REGISTER: "/register",
    CHECK_EMAIL: "/check-email",
    CHECK_TMDB_API_KEY: "/check-tmdb-api-key",
    REFRESH_TOKEN: "/refresh-token",
  },

  ACCOUNT: {
    ROOT: "/account",
    PROFILE: "/profile",
  },

  USERS: {
    ROOT: "/users",
  },

  MOVIES: {
    ROOT: "/movies",
    ID_PARAM: "/:id",
    VIDEOS: "/videos",
  },
} as const;
