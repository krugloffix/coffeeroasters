import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const menuSlice = createSlice({
  name: "menuModal",
  initialState,
  reducers: {
    toggleMenu(state, action) {
      state.isActive = action.payload;
      if (action.payload === true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
