import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const summaryModalSlice = createSlice({
  name: "summaryModal",
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

export const { openModal, closeModal } = summaryModalSlice.actions;
export default summaryModalSlice.reducer;
