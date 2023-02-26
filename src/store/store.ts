import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "../reducer/cars.reducer";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
