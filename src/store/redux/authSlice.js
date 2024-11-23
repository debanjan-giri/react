import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: JSON.parse(localStorage.getItem("user")) || {
    username: null,
    password: null,
    isAuthenticated: false,
  },
  reducers: {
    register: (state, action) => {
      const payload = action.payload;
      state.username = payload?.username;
      state.password = payload?.password;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state) => {
      state.username = null;
      state.password = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { register, logout } = authSlice.actions;
export default authSlice.reducer;
