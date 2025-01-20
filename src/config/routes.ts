export const API_PREFIX = "/api" as const;
export const API_VERSION = "/v1" as const;

export const ROUTE_SEGMENT = {
  ROOT: "/",
  ID_PARAM: "/:id",
  EMAIL_PARAM: "/:email",

  AUTH: {
    ROOT: "/auth",
    LOGIN: "/login",
    REGISTER: "/register",
    CHECK_EMAIL: "/check-email",
    REFRESH_TOKEN: "/refresh-token",
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
