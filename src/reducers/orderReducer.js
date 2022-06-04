import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    mobileNumber: null,
    country:null,
    address1:null,
    address2:null,
    city:null,
    state:null,
    postalCode:null,
};

export const orderReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      return Object.assign({}, state, action.payload);
    }
  },
});

export const { setOrderDetails } = orderReducer.actions;

export default orderReducer.reducer;
