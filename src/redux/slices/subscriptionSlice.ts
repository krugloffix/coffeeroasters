import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

type SubType = {
  address: string;
  country: string;
  delivery: string;
  deliveryDate: string;
  email: string;
  grind: string;
  id: string;
  lastName: string;
  name: string;
  phoneNumber: string;
  postcode: string;
  preferences: string;
  price: number;
  quantity: string;
  startDate: string;
  totalCost: number;
  type: string;
};

interface SubState {
  sub: SubType;
  status: Status;
}

export const fetchSub = createAsyncThunk("sub/fetchSub", async (id: string) => {
  const docRef = doc(db, "subs", `${id}`);
  const docSnap = await getDoc(docRef);
  return docSnap.data() as SubState;
});

const initialState: SubState = {
  sub: {
    address: "",
    country: "",
    delivery: "",
    deliveryDate: "",
    email: "",
    grind: "",
    id: "",
    lastName: "",
    name: "",
    phoneNumber: "",
    postcode: "",
    preferences: "",
    price: 0,
    quantity: "",
    startDate: "",
    totalCost: 0,
    type: "",
  },
  status: Status.LOADING,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setSub(state, action) {
      state.sub = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSub.pending, (state) => {
      state.status = Status.LOADING;
      state.sub = {
        address: "",
        country: "",
        delivery: "",
        deliveryDate: "",
        email: "",
        grind: "",
        id: "",
        lastName: "",
        name: "",
        phoneNumber: "",
        postcode: "",
        preferences: "",
        price: 0,
        quantity: "",
        startDate: "",
        totalCost: 0,
        type: "",
      };
    });
    builder.addCase(fetchSub.rejected, (state) => {
      state.status = Status.ERROR;
      state.sub = {
        address: "",
        country: "",
        delivery: "",
        deliveryDate: "",
        email: "",
        grind: "",
        id: "",
        lastName: "",
        name: "",
        phoneNumber: "",
        postcode: "",
        preferences: "",
        price: 0,
        quantity: "",
        startDate: "",
        totalCost: 0,
        type: "",
      };
    });
    builder.addCase(fetchSub.fulfilled, (state, action: PayloadAction<any>) => {
      state.status = Status.SUCCESS;
      state.sub = action.payload;
    });
  },
});

export const { setSub } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
