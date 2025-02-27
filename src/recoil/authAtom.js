import { atom } from "recoil";

// Authentication state
export const authAtom = atom({
  key: "authState",
  default: {
    isAuthenticated: !!localStorage.getItem("authToken"),
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("authToken") || null,
  },
});
