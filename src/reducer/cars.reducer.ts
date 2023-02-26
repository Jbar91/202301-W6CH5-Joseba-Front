import { createReducer } from "@reduxjs/toolkit";
import { CarStructure } from "../models/car";
import * as ac from "./cars.actions.creator";

const initialState: CarStructure[] = [];

export const carReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadCarCreator, (state, { payload }) => {
    state.find((item) => item.id === payload.id);
  });
  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.id !== payload.id)
  );
  builder.addCase(ac.postCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) => {
    const updated = state.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    );
    return updated;
  });
  builder.addDefaultCase((state) => state);
});
