import { CarStructure } from "../models/car";
import {
  deleteCreator,
  loadCarCreator,
  loadCreator,
  postCreator,
  updateCreator,
} from "./cars.actions.creator";
import { carReducer } from "./cars.reducer";

let carMock: CarStructure[];
let state: CarStructure[];

describe("Given the carReducer function", () => {
  beforeEach(() => {
    carMock = [
      { id: 3, brand: "Porsche", model: "Taycan", color: "car pic" },
      { id: 99, brand: "BMW", model: "m3", color: "nice car" },
    ];
    state = [carMock[1]];
  });
  describe("When the loadCreator is called", () => {
    test("Then it should return all the data", () => {
      const result = carReducer([], loadCreator(carMock));
      expect(result).toEqual(carMock);
    });
  });
  describe("When the loadCarCreator is called", () => {
    test("Then it should return one car", () => {
      const result = carReducer(state, loadCarCreator(carMock[1]));
      expect(result).toEqual(state);
    });
  });
  describe("When the deleteCreator is called", () => {
    test("Then it should delete one item", () => {
      const result = carReducer(state, deleteCreator(carMock[1]));
      expect(result).toEqual([]);
    });
  });
  describe("When the postCreator is called", () => {
    test("Then it should add a car", () => {
      const updatedState = [...state, carMock[0]];
      const result = carReducer(state, postCreator(carMock[0]));
      expect(result).toEqual(updatedState);
    });
  });
  describe("Given the updateCreator function", () => {
    test("Then it should modify an item", () => {
      const update = { id: 99, brand: "BMW", model: "X6", color: "nice pic" };
      const result = carReducer(state, updateCreator(update));
      expect(result).toEqual([update]);
    });
    test("Then if not found returns the same item", () => {
      const result = carReducer(state, updateCreator({} as CarStructure));
      expect(result).toEqual(state);
    });
  });
});
