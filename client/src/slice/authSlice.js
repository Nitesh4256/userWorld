import { createSlice } from "@reduxjs/toolkit";

const intitailState = {
  login: false,
  userData: JSON.parse(localStorage.getItem("user")),
};
export const authSlice = createSlice({
  name: "auth",
  initialState: intitailState,
  reducers: {
    setLogin(state, value) {
      state.login = true;
    },
    setUser(state, value) {
      state.userData = value.userData;
    },
  },
});
export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
