// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    {
      name: "Breakfast",
      cost: 50,
      quantity: 0,
    },
    {
      name: "Lunch",
      cost: 60,
      quantity: 0,
    },
    {
      name: "High tea",
      cost: 25,
      quantity: 0,
    },
    {
      name: "Dinner",
      cost: 70,
      quantity: 0,
    },
   
  ],

  reducers: {
    toggleMealSelection: (state, action) => {
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
