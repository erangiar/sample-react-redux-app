import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name:null,

};

export const orderReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      return Object.assign({}, state, action.payload);
    }
  },
});

export const { setOrder } = orderReducer.actions;

export default orderReducer.reducer;
