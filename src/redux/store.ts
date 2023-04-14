import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import userSlice from "./slices/userSlice";
import loginModalSlice from "./slices/loginModalSlice";
import summaryModalSlice from "./slices/summaryModalSlice";
import authSlice from "./slices/authSlice";
import planSlice from "./slices/planSlice";
import subscriptionSlice from "./slices/subscriptionSlice";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    loginModal: loginModalSlice,
    summaryModal: summaryModalSlice,
    auth: authSlice,
    plan: planSlice,
    subscription: subscriptionSlice,
    menu: menuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
