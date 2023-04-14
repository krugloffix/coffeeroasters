import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  member: true
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setMember(state, action) {
      state.member = action.payload;
    },
  },
});

export const { setEmail, setPassword, setMember } = authSlice.actions;

export default authSlice.reducer;
