// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

import * as ac from "../reducer/cars.actions.creator";
import { CarStructure } from "../models/car";
import { CarApiRepo } from "../repo/car.api.repo";

export function useCars(repo: CarApiRepo) {
  const cars = useSelector((state: RootState) => state.cars);
  const dispatch = useDispatch<AppDispatch>();

  const loadCars = async () => {
    try {
      const data = await repo.loadCars();
      dispatch(ac.loadCreator(data));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const loadCar = async (car: CarStructure) => {
    try {
      const data = await repo.loadCar(car);
      dispatch(ac.loadCarCreator(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const addCar = async (car: CarStructure) => {
    try {
      const newCar = await repo.addCar(car);
      dispatch(ac.postCreator(newCar));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateCar = async (car: CarStructure) => {
    try {
      const finalJoke = await repo.updateCar(car);
      dispatch(ac.updateCreator(finalJoke));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteCar = async (car: CarStructure) => {
    try {
      repo.deleteCar(car);
      dispatch(ac.deleteCreator(car));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    cars,
    loadCars,
    loadCar,
    updateCar,
    addCar,
    deleteCar,
  };
}
