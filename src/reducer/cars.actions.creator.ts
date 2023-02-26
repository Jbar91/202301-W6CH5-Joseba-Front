import { createAction } from "@reduxjs/toolkit";
import { CarStructure } from "../models/car";
import { carActions } from "./cars.actions.types";

export const loadCreator = createAction<CarStructure[]>(carActions.loadCars);

export const loadCarCreator = createAction<CarStructure>(carActions.loadCar);

export const deleteCreator = createAction<CarStructure>(carActions.deleteCar);

export const updateCreator = createAction<CarStructure>(carActions.updateCar);

export const postCreator = createAction<CarStructure>(carActions.postCar);
