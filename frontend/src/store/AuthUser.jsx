import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLogout: false,
  isLogin: false,
  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials);
      set({ user: response.data.user, isSigningUp: false });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message || "Signup failed");
      set({ isSigningUp: false, user: null });
    }
  },
  login: async (credentials) => {
    set({ isLogin: true });
    try {
      const response = await axios.post("/api/v1/auth/login", credentials);
      set({ user: response.data.user, isLogin: false });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message || "Login failed");
      set({ isLogin: false, user: null });
    }
  },
  logout: async () => {
    set({ isLogout: true });
    try {
      await axios.post("/api/v1/auth/logout");
      set({ user: null, isLogout: false });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message || "Logout failed");
      set({ isCheckingAuth: false, user: null });
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get("/api/v1/auth/authCheck");
      set({ user: response.data.user, isCheckingAuth: false });
    } catch (error) {
      // toast.error(error.response.data.message || "authCheck failed");
      set({ isCheckingAuth: false, user: null });
    }
  },
}));
