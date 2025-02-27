import { useRecoilState } from "recoil";
import { authAtom } from "../recoil/authAtom";
import axios from "axios";

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authAtom);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "https://core-skill-test.webc.in/employee-portal/api/v1/auth/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;

      if (data.success) {
        const { token, ...userData } = data.data;
        setAuth({ isAuthenticated: true, user: userData, token });
        localStorage.setItem("authToken", token);
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    }
  };

  const logout = () => {
    // Clear auth state in Recoil
    setAuth({ isAuthenticated: false, user: null, token: null });
    // Remove token from localStorage
    localStorage.removeItem("authToken");
  };

  return { auth, login, logout }; // Return logout function
};
