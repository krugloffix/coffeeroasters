import { createSlice } from "@reduxjs/toolkit";

interface userSliceState {
  id: string;
  token: string;
  email: string;
  isSub: boolean;
}

const initialState: userSliceState = {
  id: localStorage.getItem("id") || "",
  token: localStorage.getItem("token") || "",
  email: localStorage.getItem("email") || "",
  isSub: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action) {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.email = action.payload.email;
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("token", action.payload.token);
    },
    logOut(state) {
      state.id = "";
      state.token = "";
      state.email = "";
      state.isSub = false;
      localStorage.removeItem("id");
      localStorage.removeItem("email");
      localStorage.removeItem("token");
    },
    setIsSub(state, action) {
      state.isSub = action.payload;
    },
  },
});

export const { logIn, logOut, setIsSub } = userSlice.actions;

export default userSlice.reducer;
