import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    openModal(state) {
      state.isActive = true;
      document.body.style.overflow = "hidden";
    },
    closeModal(state) {
      state.isActive = false;
      document.body.style.overflow = "auto";
    },
  },
});

export const { openModal, closeModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;
