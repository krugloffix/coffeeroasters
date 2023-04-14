import { createSlice } from "@reduxjs/toolkit";

interface PlanSliceState {
  plan: {
    preferences: string;
    type: string;
    quantity: string;
    grind: string;
    delivery: string;
    price: number;
    totalCost: number;
  };
  isPlan: boolean;
}

const initialState: PlanSliceState = {
  plan: {
    preferences: "",
    type: "",
    quantity: "",
    grind: "",
    delivery: "",
    price: 0,
    totalCost: 0,
  },
  isPlan: false,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan(state, action) {
      state.plan = action.payload;
    },
    setIsPlan(state, action) {
      state.isPlan = action.payload;
    },
  },
});

export const { setPlan, setIsPlan } = planSlice.actions;

export default planSlice.reducer;
